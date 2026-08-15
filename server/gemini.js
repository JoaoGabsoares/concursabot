import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import logger from './logger.js';

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    logger.warn('GEMINI', 'Aviso: GEMINI_API_KEY não encontrada no arquivo .env');
}

const ai = new GoogleGenAI({ apiKey: apiKey });
// Modelos válidos e disponíveis no SDK @google/genai (Cadeia de alta disponibilidade)
const DEFAULT_MODEL = process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite';
const FALLBACK_CHAIN = [
    'gemini-3.5-flash-lite',
    'gemini-flash-lite-latest',
    'gemini-3.1-flash-lite',
    'gemini-3.5-flash'
];
const DEFAULT_EMBEDDING_MODEL = process.env.GEMINI_EMBEDDING_MODEL || 'gemini-embedding-001';
const EMBEDDING_OUTPUT_DIMENSIONALITY = 768;

// Timeout por tentativa (65s): suficiente para redação de aulas extensas
const ATTEMPT_TIMEOUT_MS = parseInt(process.env.GEMINI_TIMEOUT_MS, 10) || 65000;

// Helper para impedir que chamadas à IA fiquem penduradas indefinidamente
function withTimeout(promise, ms = ATTEMPT_TIMEOUT_MS, operationName = 'Operação Gemini') {
    let timer;
    const timeoutPromise = new Promise((_, reject) => {
        timer = setTimeout(() => {
            reject(new Error(`Timeout: ${operationName} excedeu o limite de ${ms / 1000}s sem resposta da API.`));
        }, ms);
    });

    return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timer));
}

function getNextFallbackModel(currentModel) {
    const idx = FALLBACK_CHAIN.indexOf(currentModel);
    if (idx === -1) {
        return FALLBACK_CHAIN[0];
    }
    if (idx >= 0 && idx < FALLBACK_CHAIN.length - 1) {
        return FALLBACK_CHAIN[idx + 1];
    }
    return null;
}

async function generateContent(prompt, systemInstruction, model = DEFAULT_MODEL, timeoutMs = ATTEMPT_TIMEOUT_MS) {
    const start = Date.now();
    try {
        const response = await withTimeout(
            ai.models.generateContent({
                model: model,
                contents: prompt,
                config: {
                    systemInstruction: systemInstruction
                }
            }),
            timeoutMs,
            `generateContent (${model})`
        );
        const duration = Date.now() - start;
        logger.ai('GEMINI', `generateContent sucesso [${model}] em ${duration}ms (Prompt: ${prompt.length} chars)`);
        return response.text;
    } catch (error) {
        const duration = Date.now() - start;
        const nextModel = getNextFallbackModel(model);
        if (nextModel) {
            logger.warn('GEMINI', `Falha no modelo ${model} (${error.message}) após ${duration}ms. Tentando fallback para ${nextModel}...`);
            return generateContent(prompt, systemInstruction, nextModel, timeoutMs);
        }
        logger.error('GEMINI', `Erro definitivo na API do Gemini (generateContent) [${model}]: ${error.message}`, error.stack);
        throw error;
    }
}

async function generateJSON(prompt, systemInstruction, schema, model = DEFAULT_MODEL, timeoutMs = ATTEMPT_TIMEOUT_MS) {
    const start = Date.now();
    try {
        const response = await withTimeout(
            ai.models.generateContent({
                model: model,
                contents: prompt,
                config: {
                    systemInstruction: systemInstruction,
                    responseMimeType: 'application/json',
                    responseSchema: schema
                }
            }),
            timeoutMs,
            `generateJSON (${model})`
        );
        const duration = Date.now() - start;
        logger.ai('GEMINI', `generateJSON sucesso [${model}] em ${duration}ms`);
        return JSON.parse(response.text);
    } catch (error) {
        const duration = Date.now() - start;
        const nextModel = getNextFallbackModel(model);
        if (nextModel) {
            logger.warn('GEMINI', `Falha no modelo ${model} (${error.message}) após ${duration}ms. Tentando fallback para ${nextModel}...`);
            return generateJSON(prompt, systemInstruction, schema, nextModel, timeoutMs);
        }
        logger.error('GEMINI', `Erro definitivo na API do Gemini (generateJSON) [${model}]: ${error.message}`, error.stack);
        throw error;
    }
}

async function* streamChat(history, message, systemInstruction, model = DEFAULT_MODEL) {
    try {
        const chat = createChat(history, systemInstruction, model);
        const responseStream = await chat.sendMessageStream({ message: message });
        
        for await (const chunk of responseStream) {
            if (chunk && chunk.text) {
                yield chunk.text;
            }
        }
    } catch (error) {
        logger.warn('GEMINI', `Falha no streamChat com modelo ${model} (${error.message}). Tentando fallback...`);
        const nextModel = getNextFallbackModel(model);
        if (nextModel) {
            yield* streamChat(history, message, systemInstruction, nextModel);
            return;
        }
        console.error("Erro definitivo na API do Gemini (streamChat):", error);
        throw error;
    }
}

function createChat(history = [], systemInstruction, model = DEFAULT_MODEL) {
    // History needs to be formatted for @google/genai chat
    const formattedHistory = history.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
    }));

    const config = {};
    if (systemInstruction) {
        config.systemInstruction = systemInstruction;
    }

    return ai.chats.create({
        model: model,
        history: formattedHistory,
        config: config
    });
}

// Generate vector embedding for RAG using gemini-embedding-001 (768-d via Matryoshka Representation Learning)
async function generateEmbedding(text, model = DEFAULT_EMBEDDING_MODEL) {
    try {
        const response = await withTimeout(
            ai.models.embedContent({
                model: model,
                contents: text,
                config: { outputDimensionality: EMBEDDING_OUTPUT_DIMENSIONALITY }
            }),
            15000,
            'generateEmbedding'
        );
        return response.embedding.values;
    } catch (error) {
        console.error("Erro na API do Gemini (generateEmbedding):", error);
        throw error;
    }
}

// Calculate Cosine Similarity between two embedding vectors
function cosineSimilarity(vecA, vecB) {
    if (!vecA || !vecB || vecA.length !== vecB.length) return 0;
    let dot = 0.0, normA = 0.0, normB = 0.0;
    for (let i = 0; i < vecA.length; i++) {
        dot += vecA[i] * vecB[i];
        normA += vecA[i] * vecA[i];
        normB += vecB[i] * vecB[i];
    }
    const denom = Math.sqrt(normA) * Math.sqrt(normB);
    return denom === 0 ? 0 : dot / denom;
}

export { generateContent, generateJSON, streamChat, createChat, generateEmbedding, cosineSimilarity };

