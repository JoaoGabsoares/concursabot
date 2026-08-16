/**
 * universal-pdf-parser.js
 * 
 * Módulo de retrocompatibilidade que re-exporta as funções e a instância
 * singleton de UniversalPdfService.
 */

import { universalPdfService, UniversalPdfService } from '../services/UniversalPdfService.js';

export const sanitizePdfText = (rawText) => universalPdfService.sanitizeText(rawText);
export const detectContentBoundaries = (fullText, totalPages) => universalPdfService.detectBoundaries(fullText, totalPages);
export const extractTableOfContents = (text) => universalPdfService.extractTOC(text);
export const classifySubjectAndBanca = (text, filename) => universalPdfService.classifySubjectAndBanca(text, filename);
export const calculateReadingMetrics = (text, pages, wpm) => universalPdfService.calculateMetrics(text, pages, wpm);
export const processUniversalPdf = (rawText, totalPages, filename) => universalPdfService.processPdf(rawText, totalPages, filename);

export { universalPdfService, UniversalPdfService };
export default universalPdfService;
