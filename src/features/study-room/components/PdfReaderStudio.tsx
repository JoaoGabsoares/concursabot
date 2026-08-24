import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Highlighter,
  Search,
  Sparkles,
  Sun,
  Moon,
  Palette,
  Sidebar,
  CheckCircle2,
  Trash2,
  Clock,
  ArrowRight,
  FileText,
  RotateCcw,
  X
} from 'lucide-react';
import { api } from '../../../api/client';
import { MaterialHighlight } from '../../../types';
import { PdfSelectionHUD, HIGHLIGHT_COLORS } from './PdfSelectionHUD';
import { PdfAiTutorDrawer } from './PdfAiTutorDrawer';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

// Configura o worker com o asset empacotado localmente pelo Vite (Zero CSP/CORS errors)
if (typeof window !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
}

export interface TableOfContentItem {
  title: string;
  page?: number | null;
}

export interface PdfReaderStudioProps {
  materialId: number;
  pdfUrl: string;
  title: string;
  subject: string;
  initialPage?: number;
  totalPages?: number;
  tableOfContents?: TableOfContentItem[];
  readingCadenceMin?: number;
  onPageChange?: (page: number) => void;
  onFinishReading?: () => void;
  isStandalone?: boolean;
}

type ReadingTheme = 'dark' | 'sepia' | 'light';

export const PdfReaderStudio: React.FC<PdfReaderStudioProps> = ({
  materialId,
  pdfUrl,
  title,
  subject,
  initialPage = 1,
  totalPages: propTotalPages,
  tableOfContents = [],
  readingCadenceMin = 60,
  onPageChange,
  onFinishReading,
  isStandalone = false
}) => {
  // PDF Document State
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [numPages, setNumPages] = useState<number>(propTotalPages || 1);
  const [scale, setScale] = useState<number>(1.2);
  const [pageInput, setPageInput] = useState<string>(initialPage.toString());
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [useNativeViewerFallback, setUseNativeViewerFallback] = useState<boolean>(false);

  // UX & Themes
  const [theme, setTheme] = useState<ReadingTheme>(() => {
    return (localStorage.getItem('PDF_READER_THEME') as ReadingTheme) || 'dark';
  });
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(!isStandalone);
  const [activeSidebarTab, setActiveSidebarTab] = useState<'toc' | 'highlights' | 'search'>('toc');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Search in Document
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Array<{ page: number; count: number }>>([]);
  const [searching, setSearching] = useState<boolean>(false);

  // Highlights & Notes Engine
  const [highlights, setHighlights] = useState<MaterialHighlight[]>([]);
  const [selectedText, setSelectedText] = useState<string>('');
  const [selectedRects, setSelectedRects] = useState<Array<{ left: number; top: number; width: number; height: number }>>([]);
  const [selectionPosition, setSelectionPosition] = useState<{ x: number; y: number } | null>(null);
  const [activeHighlightPopover, setActiveHighlightPopover] = useState<MaterialHighlight | null>(null);
  const [popoverPos, setPopoverPos] = useState<{ x: number; y: number } | null>(null);

  // AI Tutor Drawer
  const [aiDrawerOpen, setAiDrawerOpen] = useState<boolean>(false);
  const [aiExcerpt, setAiExcerpt] = useState<string>('');
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [aiExplanation, setAiExplanation] = useState<any>(null);

  // Study Timer
  const [studySeconds, setStudySeconds] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(true);

  // DOM Refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const textLayerRef = useRef<HTMLDivElement | null>(null);
  const renderTaskRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Timer Tick
  useEffect(() => {
    let interval: any = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setStudySeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  // Save Theme Preference
  const changeTheme = (newTheme: ReadingTheme) => {
    setTheme(newTheme);
    localStorage.setItem('PDF_READER_THEME', newTheme);
  };

  // 1. Load Highlights from Backend
  const loadHighlights = useCallback(async () => {
    try {
      const res = await api.getMaterialHighlights(materialId);
      if (res && res.highlights) {
        setHighlights(res.highlights);
      }
    } catch (err) {
      console.warn('Erro ao carregar grifos do material:', err);
    }
  }, [materialId]);

  useEffect(() => {
    loadHighlights();
  }, [loadHighlights]);

  // 2. Load PDF Document via robust fetch ArrayBuffer + pdfjs-dist
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setError(null);
    setUseNativeViewerFallback(false);

    const fullUrl = pdfUrl.startsWith('http')
      ? pdfUrl
      : `${window.location.origin}${pdfUrl.startsWith('/') ? '' : '/'}${pdfUrl}`;

    // Buscar ArrayBuffer diretamente para imunidade contra problemas de CORS/Worker
    fetch(fullUrl, { credentials: 'include' })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} (${response.statusText}) ao baixar PDF`);
        }
        return response.arrayBuffer();
      })
      .then((data) => {
        if (isCancelled) return null;
        const loadingTask = pdfjsLib.getDocument({
          data,
          cMapUrl: `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/cmaps/`,
          cMapPacked: true
        });
        return loadingTask.promise;
      })
      .then((doc) => {
        if (!isCancelled && doc) {
          setPdfDoc(doc);
          setNumPages(doc.numPages);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          console.warn('Fallback para carregamento direto via URL ou visualizador nativo:', err);
          // Tentativa secundária direta por URL
          try {
            const directTask = pdfjsLib.getDocument({
              url: fullUrl,
              withCredentials: true
            });
            directTask.promise
              .then((doc) => {
                if (!isCancelled) {
                  setPdfDoc(doc);
                  setNumPages(doc.numPages);
                  setLoading(false);
                }
              })
              .catch((finalErr) => {
                if (!isCancelled) {
                  console.error('Falha final ao renderizar PDF:', finalErr);
                  setError('Não foi possível renderizar o arquivo no modo interativo. Você pode alternar para o visualizador padrão.');
                  setLoading(false);
                }
              });
          } catch (e) {
            setError('Não foi possível renderizar o arquivo PDF.');
            setLoading(false);
          }
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [pdfUrl]);

  // 3. Render Page on Canvas + Text Layer
  const renderPage = useCallback(
    async (pageNumber: number) => {
      if (!pdfDoc) return;

      try {
        if (renderTaskRef.current) {
          renderTaskRef.current.cancel();
        }

        const page = await pdfDoc.getPage(pageNumber);
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        // Retina / HiDPI crisp scaling
        const outputScale = window.devicePixelRatio || 1;
        const viewport = page.getViewport({ scale });

        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

        const renderContext = {
          canvasContext: context,
          transform: transform || undefined,
          viewport: viewport
        };

        const renderTask = page.render(renderContext);
        renderTaskRef.current = renderTask;
        await renderTask.promise;

        // Render Text Layer for Selection
        const textLayerDiv = textLayerRef.current;
        if (textLayerDiv) {
          textLayerDiv.innerHTML = '';
          textLayerDiv.style.width = `${Math.floor(viewport.width)}px`;
          textLayerDiv.style.height = `${Math.floor(viewport.height)}px`;

          const textContent = await page.getTextContent();
          
          // Custom SVG/Span text injection for selectable text
          textContent.items.forEach((item: any) => {
            if (!item.str) return;
            const tx = pdfjsLib.Util.transform(viewport.transform, item.transform);
            const fontHeight = Math.sqrt(tx[2] * tx[2] + tx[3] * tx[3]);

            const span = document.createElement('span');
            span.textContent = item.str;
            span.style.left = `${tx[4]}px`;
            span.style.top = `${tx[5] - fontHeight}px`;
            span.style.fontSize = `${fontHeight}px`;
            span.style.fontFamily = item.fontName || 'sans-serif';
            span.className = 'pdf-text-item select-text';
            textLayerDiv.appendChild(span);
          });
        }
      } catch (err: any) {
        if (err.name !== 'RenderingCancelledException') {
          console.warn('Erro na renderização da página do PDF:', err);
        }
      }
    },
    [pdfDoc, scale]
  );

  useEffect(() => {
    renderPage(currentPage);
  }, [currentPage, renderPage]);

  // Page Navigation Handlers
  const goToPage = (page: number) => {
    const target = Math.max(1, Math.min(numPages, page));
    setCurrentPage(target);
    setPageInput(target.toString());
    onPageChange?.(target);
    api.updateBookmark(materialId, target).catch(() => {});
  };

  const handlePrevPage = () => goToPage(currentPage - 1);
  const handleNextPage = () => goToPage(currentPage + 1);

  const handlePageInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const p = parseInt(pageInput, 10);
    if (!isNaN(p)) {
      goToPage(p);
    }
  };

  // Zoom Controls
  const handleZoomIn = () => setScale((prev) => Math.min(3.0, prev + 0.2));
  const handleZoomOut = () => setScale((prev) => Math.max(0.5, prev - 0.2));
  const handleFitWidth = () => setScale(1.4);

  // Fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  // Text Selection Event Listener for HUD
  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !selection.toString().trim()) {
      setSelectionPosition(null);
      setSelectedText('');
      setSelectedRects([]);
      return;
    }

    const text = selection.toString().trim();
    if (text.length > 0 && textLayerRef.current) {
      const range = selection.getRangeAt(0);
      const layerRect = textLayerRef.current.getBoundingClientRect();
      const rect = range.getBoundingClientRect();
      const clientRects = Array.from(range.getClientRects());
      
      const normalizedRects = clientRects.map((r) => ({
        left: (r.left - layerRect.left) / scale,
        top: (r.top - layerRect.top) / scale,
        width: r.width / scale,
        height: r.height / scale
      })).filter((r) => r.width > 0 && r.height > 0);

      setSelectedText(text);
      setSelectedRects(normalizedRects);
      setSelectionPosition({
        x: rect.left + rect.width / 2,
        y: rect.top
      });
    }
  };

  // Save Highlight
  const handleSaveHighlight = async (color: 'yellow' | 'green' | 'purple' | 'red' | 'blue', note?: string) => {
    const text = selectedText;
    const rects = [...selectedRects];
    const tempId = Date.now();

    // Feedback visual imediato (otimista)
    const optimisticHighlight: MaterialHighlight = {
      id: tempId,
      material_id: typeof materialId === 'string' ? parseInt(materialId, 10) || 0 : materialId,
      user_id: '',
      page_number: currentPage,
      text,
      color,
      note: note || undefined,
      position: { rects },
      created_at: new Date().toISOString()
    };
    setHighlights((prev) => [...prev, optimisticHighlight]);

    window.getSelection()?.removeAllRanges();
    setSelectionPosition(null);
    setSelectedText('');
    setSelectedRects([]);

    try {
      const res = await api.createMaterialHighlight(materialId, {
        page_number: currentPage,
        text,
        color,
        note,
        position: { rects }
      });

      if (res && res.highlight) {
        setHighlights((prev) => prev.map((h) => (h.id === tempId ? res.highlight : h)));
      }
    } catch (err) {
      console.error('Erro ao salvar grifo:', err);
    }
  };

  // Delete Highlight
  const handleDeleteHighlight = async (highlightId: number) => {
    try {
      await api.deleteMaterialHighlight(highlightId);
      setHighlights((prev) => prev.filter((h) => h.id !== highlightId));
    } catch (err) {
      console.error('Erro ao remover grifo:', err);
    }
  };

  // Ask AI Tutor for Explanation
  const handleAskAi = async () => {
    const textToExplain = selectedText;
    setAiExcerpt(textToExplain);
    setAiDrawerOpen(true);
    setAiLoading(true);
    setAiExplanation(null);
    setSelectionPosition(null);

    try {
      const res = await api.explainPdfExcerpt(materialId, {
        text: textToExplain,
        page_number: currentPage,
        subject,
        topic: title
      });
      if (res && res.explanation) {
        setAiExplanation(res.explanation);
      }
    } catch (err) {
      console.error('Erro ao consultar IA:', err);
    } finally {
      setAiLoading(false);
    }
  };

  // Create Instant Flashcard from Selected Text
  const handleCreateFlashcard = () => {
    const text = selectedText;
    setAiExcerpt(text);
    setAiDrawerOpen(true);
    setAiLoading(true);
    setSelectionPosition(null);

    api.explainPdfExcerpt(materialId, {
      text,
      page_number: currentPage,
      subject,
      topic: title
    })
      .then((res) => {
        setAiExplanation(res?.explanation || null);
      })
      .finally(() => {
        setAiLoading(false);
      });
  };

  // Handle Save Flashcard to Deck
  const handleSaveFlashcardToDeck = async (front: string, back: string) => {
    try {
      await api.createFlashcard({
        subject,
        topic: title,
        front,
        back
      });
    } catch (err) {
      console.warn('Erro ao salvar flashcard:', err);
    }
  };

  // Search inside PDF
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfDoc || !searchQuery.trim()) return;

    setSearching(true);
    setSearchResults([]);
    const matches: Array<{ page: number; count: number }> = [];

    for (let i = 1; i <= Math.min(numPages, 100); i++) {
      try {
        const page = await pdfDoc.getPage(i);
        const textContent = await page.getTextContent();
        const fullText = textContent.items.map((it: any) => it.str).join(' ');
        const regex = new RegExp(searchQuery.trim(), 'gi');
        const count = (fullText.match(regex) || []).length;
        if (count > 0) {
          matches.push({ page: i, count });
        }
      } catch (e) {}
    }

    setSearchResults(matches);
    setSearching(false);
  };

  // Current page highlights
  const pageHighlights = highlights.filter((h) => h.page_number === currentPage);

  // Time format helper
  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Theme styles
  const themeClasses = {
    dark: 'bg-[#0d1117] text-[#e6edf3] reader-dark',
    sepia: 'bg-[#fbf0d9] text-[#2c2214] reader-sepia',
    light: 'bg-[#ffffff] text-[#1f2328] reader-light'
  };

  return (
    <div
      ref={containerRef}
      className={`flex flex-col h-full min-h-[700px] rounded-2xl overflow-hidden border border-[var(--border-subtle)] shadow-2xl transition-colors duration-200 ${themeClasses[theme]}`}
      onMouseUp={handleMouseUp}
    >
      {/* ============================================================ */}
      {/* 1. TOP MASTER TOOLBAR                                        */}
      {/* ============================================================ */}
      <header className="p-3 border-b border-black/10 dark:border-white/10 flex items-center justify-between flex-wrap gap-2.5 bg-black/5 dark:bg-white/5 backdrop-blur-md">
        
        {/* Left: Material Info & Sidebar Toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer text-xs flex items-center gap-1 font-sans font-bold"
            title="Abrir/Fechar Sumário e Painel de Grifos"
          >
            <Sidebar className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="hidden md:inline">Painel</span>
          </button>

          <div className="h-4 w-px bg-black/10 dark:bg-white/10 mx-0.5" />

          <div className="max-w-[280px] sm:max-w-xs truncate">
            <h2 className="font-sans font-bold text-xs truncate" title={title}>
              {title}
            </h2>
            <p className="text-[10px] font-mono opacity-70 truncate">
              {subject}
            </p>
          </div>
        </div>

        {/* Center: Page Controls & Zoom */}
        <div className="flex items-center gap-1.5">
          {/* Prev Page */}
          <button
            type="button"
            onClick={handlePrevPage}
            disabled={currentPage <= 1}
            className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 disabled:opacity-30 transition-colors cursor-pointer"
            title="Página Anterior (←)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Jump to Page Form */}
          <form onSubmit={handlePageInputSubmit} className="flex items-center gap-1">
            <input
              type="text"
              value={pageInput}
              onChange={(e) => setPageInput(e.target.value)}
              onBlur={handlePageInputSubmit}
              className="w-12 text-center py-1 px-1 rounded-md text-xs font-mono font-bold bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)]"
            />
            <span className="text-xs font-mono opacity-60">/ {numPages}</span>
          </form>

          {/* Next Page */}
          <button
            type="button"
            onClick={handleNextPage}
            disabled={currentPage >= numPages}
            className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 disabled:opacity-30 transition-colors cursor-pointer"
            title="Próxima Página (→)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="h-4 w-px bg-black/10 dark:bg-white/10 mx-1" />

          {/* Zoom */}
          <div className="flex items-center gap-0.5 bg-black/5 dark:bg-white/5 p-0.5 rounded-lg border border-black/10 dark:border-white/10">
            <button
              type="button"
              onClick={handleZoomOut}
              className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded transition-colors cursor-pointer"
              title="Diminuir Zoom (-)"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[10px] font-mono px-1 font-bold">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              onClick={handleZoomIn}
              className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded transition-colors cursor-pointer"
              title="Aumentar Zoom (+)"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Themes, Timer & Fullscreen/New Tab */}
        <div className="flex items-center gap-2">
          {/* Study Cadence Timer Badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--accent-primary-glow)] border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] text-xs font-mono font-bold">
            <Clock className="w-3.5 h-3.5 animate-pulse" />
            <span>{formatTimer(studySeconds)}</span>
          </div>

          {/* Theme Selector */}
          <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-0.5 rounded-lg border border-black/10 dark:border-white/10">
            <button
              type="button"
              onClick={() => changeTheme('dark')}
              className={`p-1.5 rounded transition-colors cursor-pointer ${theme === 'dark' ? 'bg-black/30 shadow-xs' : 'opacity-60 hover:opacity-100'}`}
              title="Tema Obsidian Dark (Anti-Fadiga)"
            >
              <Moon className="w-3.5 h-3.5 text-indigo-400" />
            </button>
            <button
              type="button"
              onClick={() => changeTheme('sepia')}
              className={`p-1.5 rounded transition-colors cursor-pointer ${theme === 'sepia' ? 'bg-amber-800/30 shadow-xs' : 'opacity-60 hover:opacity-100'}`}
              title="Tema Sépia (Conforto de Papel)"
            >
              <Palette className="w-3.5 h-3.5 text-amber-600" />
            </button>
            <button
              type="button"
              onClick={() => changeTheme('light')}
              className={`p-1.5 rounded transition-colors cursor-pointer ${theme === 'light' ? 'bg-white/80 text-black shadow-xs' : 'opacity-60 hover:opacity-100'}`}
              title="Tema Clean Light (Editorial)"
            >
              <Sun className="w-3.5 h-3.5 text-amber-500" />
            </button>
          </div>

          {/* New Tab Button */}
          {!isStandalone && (
            <a
              href={`#/reader/${materialId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
              title="Abrir Leitor em Nova Aba"
            >
              <ExternalLink className="w-4 h-4 text-[var(--accent-primary)]" />
            </a>
          )}

          {/* Fullscreen Button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
            title={isFullscreen ? 'Sair da Tela Cheia' : 'Modo Foco em Tela Cheia'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Concluir Leitura & Ir p/ Questões */}
          {onFinishReading && (
            <button
              type="button"
              onClick={onFinishReading}
              className="px-3 py-1.5 rounded-lg font-sans font-bold text-xs bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
              title="Finalizar leitura do bloco e resolver questões de fixação"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Concluir Leitura</span>
            </button>
          )}
        </div>

      </header>

      {/* ============================================================ */}
      {/* 2. MAIN READING WORKSPACE WITH SIDEBAR                        */}
      {/* ============================================================ */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* SIDEBAR (TOC / GRIFOS / BUSCA) */}
        {sidebarOpen && (
          <aside className="w-64 sm:w-72 border-r border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex flex-col shrink-0 animate-in slide-in-from-left duration-200">
            
            {/* Sidebar Tabs Header */}
            <div className="flex border-b border-black/10 dark:border-white/10 p-1 gap-1 text-xs font-sans font-bold">
              <button
                type="button"
                onClick={() => setActiveSidebarTab('toc')}
                className={`flex-1 py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer ${
                  activeSidebarTab === 'toc'
                    ? 'bg-[var(--accent-primary)] text-white'
                    : 'hover:bg-black/10 dark:hover:bg-white/10 opacity-70'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Sumário</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSidebarTab('highlights')}
                className={`flex-1 py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer ${
                  activeSidebarTab === 'highlights'
                    ? 'bg-[var(--accent-primary)] text-white'
                    : 'hover:bg-black/10 dark:hover:bg-white/10 opacity-70'
                }`}
              >
                <Highlighter className="w-3.5 h-3.5" />
                <span>Grifos ({highlights.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSidebarTab('search')}
                className={`flex-1 py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer ${
                  activeSidebarTab === 'search'
                    ? 'bg-[var(--accent-primary)] text-white'
                    : 'hover:bg-black/10 dark:hover:bg-white/10 opacity-70'
                }`}
              >
                <Search className="w-3.5 h-3.5" />
                <span>Busca</span>
              </button>
            </div>

            {/* Sidebar Tab Contents */}
            <div className="flex-1 overflow-y-auto p-3 text-xs space-y-2">
              
              {/* TAB 1: SUMÁRIO (TOC) */}
              {activeSidebarTab === 'toc' && (
                <div className="space-y-1">
                  {tableOfContents && tableOfContents.length > 0 ? (
                    tableOfContents.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => goToPage(item.page || 1)}
                        className={`w-full text-left p-2 rounded-lg transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                          currentPage === item.page
                            ? 'bg-[var(--accent-primary-glow)] text-[var(--accent-primary)] font-bold'
                            : 'hover:bg-black/5 dark:hover:bg-white/5 opacity-80 hover:opacity-100'
                        }`}
                      >
                        <span className="truncate">{item.title}</span>
                        {item.page && <span className="font-mono text-[10px] opacity-60">p.{item.page}</span>}
                      </button>
                    ))
                  ) : (
                    <div className="py-8 text-center opacity-60">
                      Nenhum sumário estruturado detectado neste PDF.
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: GRIFOS & NOTAS */}
              {activeSidebarTab === 'highlights' && (
                <div className="space-y-2">
                  {highlights.length > 0 ? (
                    highlights.map((h) => {
                      const colorCfg = HIGHLIGHT_COLORS.find((c) => c.id === h.color) || HIGHLIGHT_COLORS[0];
                      return (
                        <div
                          key={h.id}
                          className="p-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 space-y-1.5 transition-all hover:border-[var(--accent-primary)]/40"
                        >
                          <div className="flex items-center justify-between text-[10px] font-mono">
                            <span
                              className="px-1.5 py-0.5 rounded font-bold"
                              style={{ backgroundColor: `${colorCfg.bg}30`, color: colorCfg.border }}
                            >
                              {colorCfg.badge} Pág. {h.page_number}
                            </span>

                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                onClick={() => goToPage(h.page_number)}
                                className="px-1.5 py-0.5 rounded hover:bg-black/10 dark:hover:bg-white/10 text-[var(--accent-primary)] font-bold cursor-pointer"
                                title="Ir para esta página"
                              >
                                Ver
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteHighlight(h.id)}
                                className="p-1 rounded hover:text-red-400 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                                title="Excluir grifo"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          <p className="text-[11px] italic line-clamp-3 leading-relaxed opacity-90">
                            "{h.text}"
                          </p>

                          {h.note && (
                            <div className="p-1.5 rounded-md bg-black/10 dark:bg-white/10 text-[10px] text-amber-500 font-sans">
                              📝 <strong>Nota:</strong> {h.note}
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div className="py-8 text-center opacity-60">
                      Você ainda não fez grifos nesta apostila. Selecione qualquer trecho com o mouse para grifar!
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: BUSCA INTERNA */}
              {activeSidebarTab === 'search' && (
                <div className="space-y-3">
                  <form onSubmit={handleSearch} className="space-y-2">
                    <div className="flex items-center gap-1">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Buscar termo na apostila..."
                        className="flex-1 p-2 rounded-lg bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 text-xs focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)]"
                      />
                      <button
                        type="submit"
                        disabled={searching || !searchQuery.trim()}
                        className="p-2 rounded-lg bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] disabled:opacity-40 cursor-pointer"
                      >
                        <Search className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>

                  {searching ? (
                    <div className="py-6 text-center text-xs opacity-70 flex items-center justify-center gap-2">
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-[var(--accent-primary)] border-t-transparent animate-spin" />
                      <span>Buscando ocorrências...</span>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="space-y-1">
                      <p className="text-[10px] font-mono opacity-60">
                        {searchResults.reduce((acc, curr) => acc + curr.count, 0)} ocorrências encontradas:
                      </p>
                      {searchResults.map((res, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => goToPage(res.page)}
                          className="w-full text-left p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-between cursor-pointer transition-colors"
                        >
                          <span className="font-bold">Página {res.page}</span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--accent-primary-glow)] text-[var(--accent-primary)]">
                            {res.count}x
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : searchQuery ? (
                    <div className="py-6 text-center opacity-60">
                      Nenhum resultado encontrado para "{searchQuery}".
                    </div>
                  ) : null}
                </div>
              )}

            </div>
          </aside>
        )}

        {/* CENTER: CANVAS & TEXT LAYER STAGE */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 flex items-start justify-center relative bg-black/5 dark:bg-black/40">
          {useNativeViewerFallback ? (
            <div className="w-full h-full min-h-[650px] flex flex-col gap-2">
              <div className="flex justify-between items-center bg-black/10 dark:bg-white/10 px-3 py-1.5 rounded-lg text-xs font-sans">
                <span className="opacity-80">Modo de Leitura Nativo Ativo</span>
                <button
                  type="button"
                  onClick={() => setUseNativeViewerFallback(false)}
                  className="px-2.5 py-1 bg-[var(--accent-primary)] text-white rounded-md font-bold hover:opacity-90 cursor-pointer text-xs"
                >
                  Alternar para Modo Interativo com Grifos
                </button>
              </div>
              <iframe
                src={`${pdfUrl}#page=${currentPage}&toolbar=1&navpanes=1`}
                className="w-full h-full min-h-[620px] rounded-xl border border-black/10 dark:border-white/10"
                title="Visualizador Nativo de PDF"
              />
            </div>
          ) : loading ? (
            <div className="py-24 flex flex-col items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full border-3 border-[var(--accent-primary)] border-t-transparent animate-spin" />
              <p className="font-bold text-xs">Renderizando documento PDF em alta fidelidade...</p>
            </div>
          ) : error ? (
            <div className="py-20 text-center max-w-md space-y-3">
              <p className="text-red-400 font-bold text-sm">{error}</p>
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setError(null);
                    setLoading(true);
                    // Força recarregamento
                    const fullUrl = pdfUrl.startsWith('http') ? pdfUrl : `${window.location.origin}${pdfUrl.startsWith('/') ? '' : '/'}${pdfUrl}`;
                    fetch(fullUrl, { credentials: 'include' })
                      .then(r => r.arrayBuffer())
                      .then(data => pdfjsLib.getDocument({ data }).promise)
                      .then(doc => { setPdfDoc(doc); setNumPages(doc.numPages); setLoading(false); })
                      .catch(() => setUseNativeViewerFallback(true));
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[var(--accent-primary)] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Tentar Novamente</span>
                </button>
                <button
                  type="button"
                  onClick={() => setUseNativeViewerFallback(true)}
                  className="px-3 py-1.5 rounded-lg bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:border-[var(--accent-primary)]"
                >
                  <FileText className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span>Visualizador Padrão</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="relative shadow-2xl rounded-lg overflow-hidden border border-black/10 dark:border-white/10 transition-all">
              {/* PDF Vector Canvas */}
              <canvas ref={canvasRef} className="block select-none" />

              {/* Real Visual Highlight Overlay Layer */}
              <div className="pdf-highlight-layer absolute inset-0 overflow-hidden">
                {pageHighlights.map((h) => {
                  const colorClass = `pdf-highlight-${h.color || 'yellow'}`;
                  const rects = h.position?.rects || [];
                  if (rects.length > 0) {
                    return rects.map((r: any, idx: number) => (
                      <div
                        key={`${h.id}-${idx}`}
                        className={`pdf-highlight-rect ${colorClass}`}
                        style={{
                          left: `${r.left * scale}px`,
                          top: `${r.top * scale}px`,
                          width: `${r.width * scale}px`,
                          height: `${r.height * scale}px`,
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHighlightPopover(h);
                          setPopoverPos({ x: e.clientX, y: e.clientY });
                        }}
                        title={h.note ? `Nota: ${h.note}` : `Grifo: ${h.text}`}
                      />
                    ));
                  }
                  return null;
                })}
              </div>

              {/* Text Selection Layer */}
              <div
                ref={textLayerRef}
                className="pdf-text-layer absolute inset-0 overflow-hidden pointer-events-auto select-text"
              />

              {/* Persistent Highlight Badges Marker Layer */}
              {pageHighlights.length > 0 && (
                <div className="absolute top-2 right-2 flex flex-col gap-1 pointer-events-none z-20">
                  {pageHighlights.map((h) => {
                    const c = HIGHLIGHT_COLORS.find((cfg) => cfg.id === h.color) || HIGHLIGHT_COLORS[0];
                    return (
                      <span
                        key={h.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHighlightPopover(h);
                          setPopoverPos({ x: e.clientX, y: e.clientY });
                        }}
                        className="px-2 py-0.5 rounded-full text-[10px] font-bold shadow-md pointer-events-auto cursor-pointer hover:scale-105 transition-transform"
                        style={{ backgroundColor: c.bg, color: c.text }}
                        title={h.note ? `Nota: ${h.note}` : `Grifo: ${h.text}`}
                      >
                        {c.badge} {h.note ? '📝 ' : ''}"{h.text.substring(0, 20)}..."
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </main>

        {/* POPOVER DE AÇÃO DO GRIFO EXISTENTE */}
        {activeHighlightPopover && popoverPos && (
          <div
            className="fixed z-50 transform -translate-x-1/2 -translate-y-full mb-3 animate-in fade-in zoom-in-95 duration-150"
            style={{ left: `${popoverPos.x}px`, top: `${popoverPos.y}px` }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[var(--bg-card)] border border-[var(--border-strong)] rounded-xl shadow-2xl p-3 flex flex-col gap-2 text-xs font-sans text-[var(--text-primary)] backdrop-blur-md min-w-[260px] max-w-[340px]">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
                <div className="flex items-center gap-1.5 font-bold">
                  <span>{HIGHLIGHT_COLORS.find((c) => c.id === activeHighlightPopover.color)?.badge || '🟡'}</span>
                  <span>{HIGHLIGHT_COLORS.find((c) => c.id === activeHighlightPopover.color)?.name || 'Grifo'}</span>
                </div>
                <button
                  type="button"
                  onClick={() => { setActiveHighlightPopover(null); setPopoverPos(null); }}
                  className="p-1 rounded-lg hover:bg-[var(--bg-hover)] text-[var(--text-muted)] cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {activeHighlightPopover.note ? (
                <div className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)]">
                  <span className="font-bold text-[var(--accent-primary)] block mb-0.5">📝 Nota de Margem:</span>
                  <p>{activeHighlightPopover.note}</p>
                </div>
              ) : (
                <p className="text-[11px] text-[var(--text-muted)] italic line-clamp-3">
                  "{activeHighlightPopover.text}"
                </p>
              )}

              <div className="flex items-center justify-between pt-1 gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    const text = activeHighlightPopover.text;
                    setActiveHighlightPopover(null);
                    setPopoverPos(null);
                    setAiExcerpt(text);
                    setAiDrawerOpen(true);
                    setAiLoading(true);
                    api.explainPdfExcerpt(materialId, {
                      text,
                      page_number: currentPage,
                      subject,
                      topic: title
                    }).then(res => {
                      if (res && res.explanation) setAiExplanation(res.explanation);
                    }).finally(() => setAiLoading(false));
                  }}
                  className="px-2.5 py-1.5 rounded-lg font-bold bg-[var(--accent-primary-glow)] hover:bg-[var(--accent-primary)] text-[var(--accent-primary)] hover:text-white transition-all flex items-center gap-1 cursor-pointer flex-1 justify-center border border-[var(--accent-primary)]/20 shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Explicar com IA</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    handleDeleteHighlight(activeHighlightPopover.id);
                    setActiveHighlightPopover(null);
                    setPopoverPos(null);
                  }}
                  className="p-1.5 rounded-lg hover:bg-red-500/10 text-red-500 transition-colors cursor-pointer"
                  title="Remover Grifo"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SELECTION HUD (FLOATING ACTION BAR) */}
        <PdfSelectionHUD
          position={selectionPosition}
          selectedText={selectedText}
          onHighlight={handleSaveHighlight}
          onAskAi={handleAskAi}
          onCreateFlashcard={handleCreateFlashcard}
          onClose={() => {
            setSelectionPosition(null);
            setSelectedText('');
          }}
        />

        {/* AI TUTOR DRAWER */}
        <PdfAiTutorDrawer
          isOpen={aiDrawerOpen}
          onClose={() => setAiDrawerOpen(false)}
          excerpt={aiExcerpt}
          pageNumber={currentPage}
          subject={subject}
          loading={aiLoading}
          explanation={aiExplanation}
          onCreateFlashcard={handleSaveFlashcardToDeck}
        />

      </div>

      {/* ============================================================ */}
      {/* 3. BOTTOM FOOTER NAVIGATION BAR                              */}
      {/* ============================================================ */}
      <footer className="p-2.5 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono opacity-80 px-4 bg-black/5 dark:bg-white/5">
        <div className="flex items-center gap-2">
          <span>Página {currentPage} de {numPages}</span>
          <span>•</span>
          <span>{Math.round((currentPage / numPages) * 100)}% concluído</span>
        </div>

        <div className="flex items-center gap-3 font-sans text-[11px]">
          <span>Dica: Selecione qualquer frase do PDF para grifar ou chamar o Tutor IA</span>
        </div>
      </footer>

    </div>
  );
};
