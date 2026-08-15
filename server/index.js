import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import fs from 'fs';
import db from './database.js';

// Load environment variables
dotenv.config();

// Import routes
import tutorRoutes from './routes/tutor.js';
import questionsRoutes from './routes/questions.js';
import simuladosRoutes from './routes/simulados.js';
import summariesRoutes from './routes/summaries.js';
import editalRoutes from './routes/edital.js';
import flashcardsRoutes from './routes/flashcards.js';
import scheduleRoutes from './routes/schedule.js';
import dashboardRoutes from './routes/dashboard.js';
import studyRoomRoutes from './routes/study-room.js';
import ragRoutes from './routes/rag.js';
import backlogRoutes from './routes/backlog.js';
import benchmarksRoutes from './routes/benchmarks.js';
import usersRoutes from './routes/users.js';
import resetRoutes from './routes/reset.js';
import gamificationRoutes from './routes/gamification.js';
import { generalLimiter, aiRateLimiter } from './middleware/rate-limiter.js';
import { seedExamBenchmarks } from './seeds/exam_benchmarks_seed.js';
import { seedUserProfiles } from './seeds/user_profiles_seed.js';
import { seedRM2Questions } from './seeds/rm2_questions_seed.js';
import { seedSESRJQuestions } from './seeds/ses_rj_questions_seed.js';

// Run seeds
seedExamBenchmarks();
seedUserProfiles();
seedRM2Questions(db);
seedSESRJQuestions(db);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import compression from 'compression';

const app = express();
const PORT = process.env.PORT || 3000;

// Enable HTTP Compression (Gzip / Brotli)
app.use(compression());

// Security Headers Middleware
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

// Core Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Multer config for PDF uploads with strict filename sanitization
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
const upload = multer({
    storage: multer.diskStorage({
        destination: uploadsDir,
        filename: (req, file, cb) => {
            const sanitizedOriginal = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
            cb(null, `${Date.now()}-${sanitizedOriginal}`);
        }
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'application/pdf') cb(null, true);
        else cb(new Error('Apenas arquivos PDF são aceitos.'), false);
    },
    limits: { fileSize: 20 * 1024 * 1024 } // 20MB
});

app.use('/api/study-room/upload', upload.single('pdf'));
app.use('/uploads', express.static(uploadsDir));

import { inviteAuthMiddleware, isInviteRequired, validateInviteCode } from './middleware/invite-auth.js';
import systemLogsRoutes from './routes/system-logs.js';
import logger from './logger.js';

// HTTP Request Logger Middleware
app.use((req, res, next) => {
    if (!req.path.startsWith('/api/system/logs') && !req.path.startsWith('/uploads')) {
        const start = Date.now();
        res.on('finish', () => {
            const duration = Date.now() - start;
            if (res.statusCode >= 400) {
                logger.warn('HTTP', `${req.method} ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`);
            } else if (req.originalUrl.startsWith('/api')) {
                logger.http('HTTP', `${req.method} ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`);
            }
        });
    }
    next();
});

// Global rate limiter for /api
app.use('/api', generalLimiter);

// Status e Verificação de Convite (Invite Gate / Web Deploy)
app.get('/api/auth/status', (req, res) => {
    const required = isInviteRequired();
    const provided = req.headers['x-invite-pin'] || req.headers['x-invite-code'] || req.query.pin;
    const authenticated = !required || validateInviteCode(provided);
    res.json({ required, authenticated });
});

app.post('/api/auth/verify-invite', (req, res) => {
    const required = isInviteRequired();
    if (!required) {
        return res.json({ success: true, required: false, message: 'Acesso liberado sem exigência de convite.' });
    }
    const { code, pin } = req.body;
    const inputCode = code || pin;
    if (validateInviteCode(inputCode)) {
        return res.json({ success: true, required: true, message: 'Convite autorizado com sucesso!' });
    }
    return res.status(401).json({ success: false, required: true, error: 'Código de convite ou PIN inválido.' });
});

// Retrocompatibilidade
app.post('/api/verify-pin', (req, res) => {
    const { pin, code } = req.body;
    if (validateInviteCode(pin || code)) {
        return res.json({ valid: true, required: isInviteRequired() });
    }
    return res.status(401).json({ valid: false, required: true, error: 'PIN ou convite incorreto.' });
});

// Health check endpoint para monitoramento de contêineres e uptime
app.get('/api/health', (req, res) => {
    try {
        const dbCheck = db.prepare('SELECT 1 as alive').get();
        res.json({
            status: 'healthy',
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
            database: dbCheck?.alive === 1 ? 'connected' : 'disconnected',
            activeModel: process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite'
        });
    } catch (err) {
        res.status(500).json({ status: 'unhealthy', error: err.message });
    }
});

app.use('/api', inviteAuthMiddleware);

// Specific AI routes with dedicated AI rate limiter
app.use('/api/system/logs', systemLogsRoutes);
app.use('/api/tutor', aiRateLimiter, tutorRoutes);
app.use('/api/questions', aiRateLimiter, questionsRoutes);
app.use('/api/simulados', aiRateLimiter, simuladosRoutes);
app.use('/api/summaries', aiRateLimiter, summariesRoutes);
app.use('/api/edital', aiRateLimiter, editalRoutes);
app.use('/api/flashcards', aiRateLimiter, flashcardsRoutes);
app.use('/api/schedule', aiRateLimiter, scheduleRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/study-room', aiRateLimiter, studyRoomRoutes);
app.use('/api/rag', aiRateLimiter, ragRoutes);
app.use('/api/backlog', backlogRoutes);
app.use('/api/benchmarks', benchmarksRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/study-reset', resetRoutes);
app.use('/api/gamification', gamificationRoutes);

// Basic error handler
app.use((err, req, res, next) => {
    logger.error('SERVER', `Erro interno não tratado: ${err.message}`, err.stack);
    const isDev = process.env.NODE_ENV !== 'production';
    res.status(500).json({
        error: isDev ? ('Erro interno no servidor: ' + err.message) : 'Ocorreu um erro interno no servidor. Por favor, tente novamente ou consulte os logs.'
    });
});

// Start server
const server = app.listen(PORT, () => {
    console.log(`ConcursaBot Backend rodando! Acesse: http://localhost:${PORT}`);
});

// Graceful shutdown
function gracefulShutdown(signal) {
    console.log(`\nEncerrando servidor (${signal})...`);
    server.close(() => {
        try {
            db.close();
            console.log('Conexão SQLite fechada com sucesso.');
        } catch (e) {}
        process.exit(0);
    });
}

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
