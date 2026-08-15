import dotenv from 'dotenv';
import { guessSubject } from './subject-guesser.js';
import { extractLessonNumber } from './routes/study-room.js';

dotenv.config();

// Helper to parse ICS date string (ex: 20260812T110000Z or 20260812)
function parseIcsDate(dateStr) {
  if (!dateStr) return null;
  const clean = dateStr.replace(/[^0-9TZ]/g, '');
  if (clean.length === 8) {
    // YYYYMMDD
    const y = parseInt(clean.substring(0, 4), 10);
    const m = parseInt(clean.substring(4, 6), 10) - 1;
    const d = parseInt(clean.substring(6, 8), 10);
    return new Date(y, m, d);
  }
  if (clean.length >= 15) {
    // YYYYMMDDTHHMMSSZ
    const y = parseInt(clean.substring(0, 4), 10);
    const m = parseInt(clean.substring(4, 6), 10) - 1;
    const d = parseInt(clean.substring(6, 8), 10);
    const h = parseInt(clean.substring(9, 11), 10);
    const min = parseInt(clean.substring(11, 13), 10);
    const s = parseInt(clean.substring(13, 15), 10);
    if (clean.endsWith('Z')) {
      return new Date(Date.UTC(y, m, d, h, min, s));
    }
    return new Date(y, m, d, h, min, s);
  }
  return null;
}

// Basic RFC 5545 iCalendar Parser
export function parseIcal(icsText) {
  const events = [];
  const lines = icsText.replace(/\r\n/g, '\n').replace(/\n\s+/g, '').split('\n');
  
  let currentEvent = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === 'BEGIN:VEVENT') {
      currentEvent = {};
    } else if (trimmed === 'END:VEVENT') {
      if (currentEvent && currentEvent.summary) {
        events.push(currentEvent);
      }
      currentEvent = null;
    } else if (currentEvent) {
      const sepIdx = trimmed.indexOf(':');
      if (sepIdx > -1) {
        const keyPart = trimmed.substring(0, sepIdx);
        const value = trimmed.substring(sepIdx + 1).replace(/\\,/g, ',').replace(/\\;/g, ';').replace(/\\n/g, '\n');
        const key = keyPart.split(';')[0].toUpperCase();

        if (key === 'SUMMARY') currentEvent.summary = value;
        if (key === 'DESCRIPTION') currentEvent.description = value;
        if (key === 'LOCATION') currentEvent.location = value;
        if (key === 'DTSTART') currentEvent.dtstart = parseIcsDate(value);
        if (key === 'DTEND') currentEvent.dtend = parseIcsDate(value);
        if (key === 'RRULE') currentEvent.rrule = value;
      }
    }
  }

  return events;
}

// Fetch and filter events for today
export async function getTodayEvents(icalUrl = process.env.GOOGLE_CALENDAR_URL) {
  if (!icalUrl || !icalUrl.trim()) {
    return { success: false, error: 'URL do Google Calendar não configurada.' };
  }

  try {
    const res = await fetch(icalUrl);
    if (!res.ok) {
      return { 
        success: false, 
        error: `Não foi possível acessar a agenda (Status ${res.status}). Verifique se usou o "Endereço Secreto iCal" (.ics) do Google Agenda.` 
      };
    }

    const text = await res.text();
    if (!text.includes('BEGIN:VCALENDAR')) {
      return { 
        success: false, 
        error: 'O link fornecido não retornou um formato iCal válido (.ics). Certifique-se de copiar o "Endereço Secreto no formato iCal".' 
      };
    }

    const events = parseIcal(text);
    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    // Filter today's events
    const todayEvents = [];

    for (const ev of events) {
      let isToday = false;

      if (ev.dtstart) {
        const evDate = `${ev.dtstart.getFullYear()}-${String(ev.dtstart.getMonth() + 1).padStart(2, '0')}-${String(ev.dtstart.getDate()).padStart(2, '0')}`;
        if (evDate === todayStr) {
          isToday = true;
        }
      }

      if (isToday) {
        const subject = guessSubject(ev.summary + ' ' + (ev.description || ''));
        const lessonNumber = extractLessonNumber(ev.summary, ev.description || '');

        const startTime = ev.dtstart 
          ? `${String(ev.dtstart.getHours()).padStart(2, '0')}:${String(ev.dtstart.getMinutes()).padStart(2, '0')}`
          : 'Dia todo';

        const endTime = ev.dtend 
          ? `${String(ev.dtend.getHours()).padStart(2, '0')}:${String(ev.dtend.getMinutes()).padStart(2, '0')}`
          : '';

        todayEvents.push({
          summary: ev.summary,
          description: ev.description || '',
          startTime,
          endTime,
          timeDisplay: endTime ? `${startTime} - ${endTime}` : startTime,
          subject: subject !== 'Geral' ? subject : null,
          lessonNumber,
          rawStart: ev.dtstart
        });
      }
    }

    // Sort by start time
    todayEvents.sort((a, b) => (a.rawStart || 0) - (b.rawStart || 0));

    return {
      success: true,
      todayStr,
      totalEvents: todayEvents.length,
      events: todayEvents
    };

  } catch (error) {
    console.error('Calendar error:', error);
    return { success: false, error: 'Falha ao conectar com o Google Calendar: ' + error.message };
  }
}
