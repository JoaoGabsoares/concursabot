import express from 'express';
import db from '../database.js';
import { generateJSON } from '../gemini.js';
import { scheduleSystemInstruction, schedulePromptTemplate, scheduleSchema } from '../prompts/schedule.js';
import { getTodayEvents } from '../calendar.js';
import { getCareerConfig } from '../careers.js';

const router = express.Router();

// Helper to format Date to ICS format (YYYYMMDDTHHMMSSZ)
function formatIcsDateTime(date) {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

// GET /today — Get today's scheduled tasks & optional synced calendar
router.get('/today', async (req, res) => {
    try {
        const userId = req.headers['x-user-id'] || 'user_joao';
        const careerId = req.headers['x-exam-id'] || req.query.careerId || 'atrfb';
        const careerCfg = getCareerConfig(careerId);

        const jsDay = new Date().getDay(); // 0 = Dom, 1 = Seg, ..., 6 = Sab
        const currentIsoDay = jsDay === 0 ? 7 : jsDay; // 1 = Seg .. 7 = Dom

        const dayNames = ['', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
        const currentDayName = dayNames[currentIsoDay];

        // 1. Fetch active schedule for this user and career
        const activeSchedule = db.prepare(`
            SELECT * FROM schedules 
            WHERE (career_id = ? OR career_id IS NULL) 
              AND (user_id = ? OR user_id = 'user_joao' OR user_id IS NULL)
            ORDER BY created_at DESC 
            LIMIT 1
        `).get(careerId, userId);

        let todayTasks = [];
        if (activeSchedule) {
            todayTasks = db.prepare(`
                SELECT id, schedule_id, day_of_week, subject, topic, duration_minutes, completed, completed_at
                FROM schedule_tasks 
                WHERE schedule_id = ? AND day_of_week = ?
                ORDER BY id ASC
            `).all(activeSchedule.id, currentIsoDay);
        }

        // 2. Check user Google Calendar settings
        const userProfile = db.prepare(`
            SELECT google_calendar_enabled, google_calendar_url 
            FROM user_profiles 
            WHERE id = ?
        `).get(userId);

        const gcalEnabled = Boolean(userProfile && userProfile.google_calendar_enabled === 1);
        const gcalUrl = userProfile?.google_calendar_url || null;

        let googleEvents = [];
        if (gcalEnabled && gcalUrl) {
            const calResult = await getTodayEvents(gcalUrl);
            if (calResult.success && Array.isArray(calResult.events)) {
                // Filter Google events to only show relevant career subjects if recognized
                const allowedSubjects = new Set((careerCfg.subjects || []).map(s => s.subject.toLowerCase().trim()));
                googleEvents = calResult.events.filter(ev => {
                    if (!ev.subject) return true; // generic study event
                    const raw = ev.subject.toLowerCase().trim();
                    return allowedSubjects.has(raw) || [...allowedSubjects].some(s => s.includes(raw) || raw.includes(s));
                });
            }
        }

        res.json({
            success: true,
            careerId: careerCfg.id,
            careerName: careerCfg.name,
            currentIsoDay,
            currentDayName,
            schedule: activeSchedule ? {
                id: activeSchedule.id,
                title: activeSchedule.title,
                exam_date: activeSchedule.exam_date,
                created_at: activeSchedule.created_at
            } : null,
            tasks: todayTasks,
            googleCalendarEnabled: gcalEnabled,
            googleCalendarConfigured: Boolean(gcalUrl),
            googleEvents
        });
    } catch (error) {
        console.error('Erro ao buscar pauta do dia do cronograma:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// POST /calendar/toggle — Enable or disable Google Calendar sync for active user
router.post('/calendar/toggle', (req, res) => {
    try {
        const userId = req.headers['x-user-id'] || 'user_joao';
        const { enabled } = req.body;
        const state = enabled ? 1 : 0;

        db.prepare('UPDATE user_profiles SET google_calendar_enabled = ? WHERE id = ?').run(state, userId);

        res.json({ 
            success: true, 
            google_calendar_enabled: state,
            message: state === 1 ? 'Sincronização com Google Agenda ativada!' : 'Sincronização com Google Agenda desativada.'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /calendar/config — Save Google Calendar iCal URL and optionally enable it
router.post('/calendar/config', async (req, res) => {
    try {
        const userId = req.headers['x-user-id'] || 'user_joao';
        const { url, enable = true } = req.body;
        if (!url || !url.trim()) {
            return res.status(400).json({ error: 'URL é obrigatória' });
        }

        const cleanUrl = url.trim();

        // Save on user profile
        db.prepare(`
            UPDATE user_profiles 
            SET google_calendar_url = ?, google_calendar_enabled = ? 
            WHERE id = ?
        `).run(cleanUrl, enable ? 1 : 0, userId);

        // Test the URL immediately
        const testResult = await getTodayEvents(cleanUrl);

        res.json({ 
            success: true, 
            message: 'URL do Google Calendar salva e conectada com sucesso!',
            google_calendar_enabled: enable ? 1 : 0,
            test: testResult
        });
    } catch (error) {
        console.error('Erro ao salvar config do calendário:', error);
        res.status(500).json({ error: error.message });
    }
});

// POST /generate — Generate Smart AI Schedule
router.post('/generate', async (req, res) => {
    const { title, subjects, hoursPerDay, daysPerWeek, examDate, careerId = 'atrfb' } = req.body;
    const activeCareerId = req.headers['x-exam-id'] || careerId;
    const userId = req.headers['x-user-id'] || 'user_joao';
    const careerCfg = getCareerConfig(activeCareerId);

    if (!subjects || subjects.length === 0) {
        return res.status(400).json({ error: 'Disciplinas obrigatórias para gerar o cronograma.' });
    }

    try {
        const prompt = schedulePromptTemplate(subjects, hoursPerDay || 4, daysPerWeek || 6, examDate, careerCfg);
        const data = await generateJSON(prompt, scheduleSystemInstruction, scheduleSchema);

        const config = JSON.stringify({ subjects, hoursPerDay, daysPerWeek, examDate, careerId: activeCareerId });
        const tasksList = Array.isArray(data.tasks) ? data.tasks : (data.schedule_data?.tasks || []);
        
        let scheduleId;
        db.transaction(() => {
            const schedStmt = db.prepare('INSERT INTO schedules (title, config, schedule_data, exam_date, career_id, user_id) VALUES (?, ?, ?, ?, ?, ?)');
            const info = schedStmt.run(title || `Cronograma ${careerCfg.shortName}`, config, JSON.stringify(data.schedule_data || data), examDate, activeCareerId, userId);
            scheduleId = info.lastInsertRowid;

            const taskStmt = db.prepare('INSERT INTO schedule_tasks (schedule_id, day_of_week, subject, topic, duration_minutes, user_id) VALUES (?, ?, ?, ?, ?, ?)');
            for (const t of tasksList) {
                taskStmt.run(scheduleId, t.day_of_week, t.subject, t.topic, t.duration_minutes || 60, userId);
            }
        })();

        res.json({ success: true, scheduleId, strategy_summary: data.schedule_data?.strategy_summary });
    } catch (error) {
        console.error("Schedule gen error:", error);
        res.status(500).json({ error: error.message });
    }
});

// GET / - List schedules filtered by active career
router.get('/', (req, res) => {
    try {
        const careerId = req.headers['x-exam-id'] || req.query.careerId || 'atrfb';
        const userId = req.headers['x-user-id'] || 'user_joao';
        const stmt = db.prepare(`
            SELECT id, title, exam_date, career_id, created_at 
            FROM schedules 
            WHERE (career_id = ? OR career_id IS NULL) 
              AND (user_id = ? OR user_id = 'user_joao' OR user_id IS NULL)
            ORDER BY created_at DESC
        `);
        res.json(stmt.all(careerId, userId));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /:id - Get schedule with tasks
router.get('/:id', (req, res) => {
    try {
        const sched = db.prepare('SELECT * FROM schedules WHERE id = ?').get(req.params.id);
        if (!sched) return res.status(404).json({ error: 'Not found' });
        
        sched.config = JSON.parse(sched.config || '{}');
        sched.schedule_data = JSON.parse(sched.schedule_data || '{}');
        
        const tasks = db.prepare('SELECT * FROM schedule_tasks WHERE schedule_id = ? ORDER BY day_of_week ASC, id ASC').all(req.params.id);
        
        res.json({ ...sched, tasks });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /:id/export-ics — Generate downloadable iCalendar file
router.get('/:id/export-ics', (req, res) => {
    try {
        const sched = db.prepare('SELECT * FROM schedules WHERE id = ?').get(req.params.id);
        if (!sched) return res.status(404).send('Cronograma não encontrado');

        const tasks = db.prepare('SELECT * FROM schedule_tasks WHERE schedule_id = ? ORDER BY day_of_week ASC').all(req.params.id);
        
        const dayByNumber = ['', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
        const nowStr = formatIcsDateTime(new Date());

        let ics = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//ConcursaBot//Smart AI Study Schedule//PT-BR',
            'CALSCALE:GREGORIAN',
            'METHOD:PUBLISH',
            `X-WR-CALNAME:${sched.title || 'ConcursaBot Plano de Estudos'}`,
            'X-WR-TIMEZONE:America/Sao_Paulo'
        ];

        // Find upcoming Monday to anchor recurring events
        const anchorMonday = new Date();
        const currentDay = anchorMonday.getDay();
        const diffToMonday = currentDay === 0 ? 1 : 1 - currentDay;
        anchorMonday.setDate(anchorMonday.getDate() + diffToMonday);
        anchorMonday.setHours(9, 0, 0, 0);

        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            const rruleDay = dayByNumber[task.day_of_week] || 'MO';

            const eventStart = new Date(anchorMonday);
            eventStart.setDate(anchorMonday.getDate() + (task.day_of_week - 1));
            const eventEnd = new Date(eventStart.getTime() + (task.duration_minutes || 60) * 60 * 1000);

            ics.push(
                'BEGIN:VEVENT',
                `UID:concursabot-task-${sched.id}-${task.id}@concursabot.local`,
                `DTSTAMP:${nowStr}`,
                `DTSTART:${formatIcsDateTime(eventStart)}`,
                `DTEND:${formatIcsDateTime(eventEnd)}`,
                `RRULE:FREQ=WEEKLY;BYDAY=${rruleDay}`,
                `SUMMARY:📚 ${task.subject}: ${task.topic || 'Estudo Dirigido'}`,
                `DESCRIPTION:Bloco de estudo do ConcursaBot (${task.duration_minutes} min) - ${sched.title}`,
                'STATUS:CONFIRMED',
                'END:VEVENT'
            );
        }

        ics.push('END:VCALENDAR');

        res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
        res.setHeader('Content-Disposition', `attachment; filename="concursabot_cronograma_${sched.id}.ics"`);
        res.send(ics.join('\r\n'));
    } catch (error) {
        console.error('Erro ao exportar .ics:', error);
        res.status(500).json({ error: error.message });
    }
});

// PUT /task/:taskId — Toggle task completion
router.put('/task/:taskId', (req, res) => {
    const { completed } = req.body;
    try {
        const stmt = db.prepare('UPDATE schedule_tasks SET completed = ?, completed_at = CURRENT_TIMESTAMP WHERE id = ?');
        stmt.run(completed ? 1 : 0, req.params.taskId);
        res.json({ success: true, completed: Boolean(completed) });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
