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
import authRoutes from './routes/auth.js';
import resetRoutes from './routes/reset.js';
import gamificationRoutes from './routes/gamification.js';
import cadernoErrosRoutes from './routes/caderno-erros.js';
import redacaoRoutes from './routes/redacao.js';
import leisecaRoutes from './routes/leiseca.js';
import aproveitamentoRoutes from './routes/aproveitamento.js';
import jurisprudenciaRoutes from './routes/jurisprudencia.js';
import communityRoutes from './routes/community.js';
import studyCycleRoutes from './routes/studyCycle.js';
import { generalLimiter, aiRateLimiter, authRateLimiter } from './middleware/rate-limiter.js';
import { seedExamBenchmarks } from './seeds/exam_benchmarks_seed.js';
import { seedUserProfiles } from './seeds/user_profiles_seed.js';
import { seedRM2Questions } from './seeds/rm2_questions_seed.js';
import { seedSESRJQuestions } from './seeds/ses_rj_questions_seed.js';
import { seedBBQuestions } from './seeds/bb_questions_seed.js';
import { seedTranspetroQuestions } from './seeds/transpetro_questions_seed.js';

// Run seeds
seedExamBenchmarks();
seedUserProfiles();
seedRM2Questions(db);
seedSESRJQuestions(db);
seedBBQuestions(db);
seedTranspetroQuestions(db);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import compression from 'compression';
import { securityGuardMiddleware } from './middleware/security-guard.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Security Hardening: Desativa fingerprinting do Express
app.disable('x-powered-by');

// Security Hardening: Confia no primeiro proxy reverso (Cloudflare / Render) para Rate Limiting real
app.set('trust proxy', 1);

// Enable HTTP Compression (Gzip / Brotli) with exclusion for Server-Sent Events (SSE)
app.use(compression({
    filter: (req, res) => {
        if (req.headers.accept === 'text/event-stream' || (req.path && req.path.includes('/community/stream'))) {
            return false;
        }
        return compression.filter(req, res);
    }
}));

// Security Headers Middleware (OWASP Top 10 Hardened)
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Permitted-Cross-Domain-Policies', 'none');
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    if (req.secure || req.headers['x-forwarded-proto'] === 'https') {
        res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    }
    res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self' https: http: wss: ws: blob: data:");
    next();
});

// Core Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
// Prototype Pollution & Security Guard (runs after body parsing)
app.use(securityGuardMiddleware);

// Serve static files from 'dist' (React 19 build) if exists, fallback to 'public'
const distDir = path.join(__dirname, '../dist');
if (fs.existsSync(distDir)) {
    app.use(express.static(distDir, {
        maxAge: process.env.NODE_ENV === 'production' ? '7d' : 0,
        etag: true,
        lastModified: true
    }));
}
app.use(express.static(path.join(__dirname, '../public'), {
    maxAge: process.env.NODE_ENV === 'production' ? '7d' : 0,
    etag: true,
    lastModified: true
}));

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
// Serve uploads with strict containment — only PDFs, no directory traversal
app.use('/uploads', (req, res, next) => {
    // Block directory traversal attempts
    if (req.path.includes('..') || req.path.includes('%2e') || req.path.includes('\\')) {
        return res.status(403).json({ error: 'Acesso negado.' });
    }
    // Only allow PDF files
    if (!req.path.toLowerCase().endsWith('.pdf')) {
        return res.status(403).json({ error: 'Apenas arquivos PDF podem ser acessados.' });
    }
    res.setHeader('Content-Disposition', 'inline');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
}, express.static(uploadsDir));

import { sessionAuthMiddleware } from './middleware/session-auth.js';
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

app.use('/api', sessionAuthMiddleware);

// Specific AI routes with dedicated AI rate limiter
app.use('/api/system/logs', systemLogsRoutes);
app.use('/api/tutor', aiRateLimiter, tutorRoutes);
app.use('/api/questions', questionsRoutes);
app.use('/api/simulados', simuladosRoutes);
app.use('/api/summaries', aiRateLimiter, summariesRoutes);
app.use('/api/edital', aiRateLimiter, editalRoutes);
app.use('/api/flashcards', flashcardsRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/study-room', studyRoomRoutes);
app.use('/api/rag', aiRateLimiter, ragRoutes);
app.use('/api/backlog', backlogRoutes);
app.use('/api/benchmarks', benchmarksRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRateLimiter, authRoutes);
app.use('/api/study-reset', resetRoutes);
app.use('/api/gamification', gamificationRoutes);
app.use('/api/caderno-erros', cadernoErrosRoutes);
app.use('/api/redacao', aiRateLimiter, redacaoRoutes);
app.use('/api/leiseca', leisecaRoutes);
app.use('/api/aproveitamento', aproveitamentoRoutes);
app.use('/api/jurisprudencia', jurisprudenciaRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/study-cycles', studyCycleRoutes);

// SPA Client Routing Catch-All (React 19 / Vite)
app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/uploads')) {
        return next();
    }
    // Block traversal and OS probe attempts from resolving to SPA
    const normalized = req.path.toLowerCase();
    if (normalized.includes('..') || normalized.includes('%2e') || normalized.startsWith('/etc') || normalized.startsWith('/proc') || normalized.includes('.env') || normalized.includes('.git')) {
        return res.status(404).json({ error: 'Recurso não encontrado.' });
    }
    const distIndex = path.join(__dirname, '../dist/index.html');
    if (fs.existsSync(distIndex)) {
        return res.sendFile(distIndex);
    }
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

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
    console.log(`🎯 Gabarito.AI Backend rodando! Acesse: http://localhost:${PORT}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`\n❌ ERRO: A porta ${PORT} já está sendo usada por outra instância do Gabarito.AI.`);
        console.error(`💡 Para resolver, execute: fuser -k ${PORT}/tcp ou killall node\n`);
    } else {
        console.error('\n❌ Erro no servidor HTTP:', err.message);
    }
    try { db.close(); } catch (e) {}
    process.exit(1);
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
process.on('uncaughtException', (err) => {
    console.error('❌ Exceção não tratada:', err);
    try { db.close(); } catch (e) {}
    process.exit(1);
});
