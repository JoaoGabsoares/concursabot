import React, { useState, useEffect, useMemo } from 'react';
import { api } from '../../api/client';
import { UserProfile, ActiveTab } from '../../types';
import { PdfReaderStudio } from '../study-room/components/PdfReaderStudio';
import { getCareerById } from '../../utils/careers';
import { getSubjectsForCareer } from '../../utils/gamification';
import {
  BookOpen,
  UploadCloud,
  Layers,
  ChevronDown,
  ExternalLink,
  Search,
  Filter,
  CheckCircle2,
  FolderOpen,
  Sparkles,
  Maximize2,
  Clock,
  ArrowRight
} from 'lucide-react';

export interface ReaderHubPageProps {
  user: UserProfile;
  careerId: string;
  onNavigate?: (tab: ActiveTab) => void;
}

export const ReaderHubPage: React.FC<ReaderHubPageProps> = ({
  user,
  careerId,
  onNavigate
}) => {
  const currentCareer = getCareerById(careerId);
  const subjects = getSubjectsForCareer(careerId);

  const [materials, setMaterials] = useState<any[]>([]);
  const [selectedMaterialId, setSelectedMaterialId] = useState<number | null>(null);
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('all');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [materialDropdownOpen, setMaterialDropdownOpen] = useState<boolean>(false);
  const [uploadModalOpen, setUploadModalOpen] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadTitle, setUploadTitle] = useState<string>('');
  const [uploadSubject, setUploadSubject] = useState<string>(subjects[0]?.name || 'Direito Tributário');

  // Load all materials with PDF for this user and career
  const fetchMaterials = async () => {
    setLoading(true);
    try {
      const res = await api.getMaterials(careerId);
      if (res && res.materials) {
        // Filter only materials with actual PDF files
        const pdfMats = res.materials.filter((m: any) => m.pdfUrl || (m.filepath && m.filepath.endsWith('.pdf')));
        setMaterials(pdfMats);

        if (pdfMats.length > 0) {
          // Keep current selection or default to first
          setSelectedMaterialId((prev) => {
            if (prev && pdfMats.some((m: any) => m.id === prev)) return prev;
            return pdfMats[0].id;
          });
        }
      }
    } catch (err) {
      console.warn('Erro ao buscar apostilas do usuário:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, [careerId]);

  // Filtered materials
  const filteredMaterials = useMemo(() => {
    return materials.filter((m) => {
      const matchesSubject = selectedSubjectFilter === 'all' || m.subject === selectedSubjectFilter;
      const matchesSearch = !searchFilter.trim() || 
        (m.title || m.filename || '').toLowerCase().includes(searchFilter.toLowerCase()) ||
        (m.subject || '').toLowerCase().includes(searchFilter.toLowerCase());
      return matchesSubject && matchesSearch;
    });
  }, [materials, selectedSubjectFilter, searchFilter]);

  const selectedMaterial = useMemo(() => {
    return materials.find((m) => m.id === selectedMaterialId) || materials[0] || null;
  }, [materials, selectedMaterialId]);

  // Handle PDF Upload
  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFile) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('pdf', uploadFile);
      formData.append('title', uploadTitle.trim() || uploadFile.name.replace(/\.pdf$/i, ''));
      formData.append('subject', uploadSubject);
      formData.append('careerId', careerId);

      const res = await api.uploadStudyMaterial(formData, user.id, careerId);
      if (res && res.material) {
        setUploadModalOpen(false);
        setUploadFile(null);
        setUploadTitle('');
        await fetchMaterials();
        setSelectedMaterialId(res.material.id);
      }
    } catch (err) {
      console.error('Erro ao enviar PDF:', err);
      alert('Falha ao enviar arquivo. Verifique se é um PDF válido de até 50MB.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] w-full overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)] font-sans">
      
      {/* ============================================================ */}
      {/* 1. TOP DEDICATED CONTROL BAR                                 */}
      {/* ============================================================ */}
      <header className="px-3 sm:px-4 py-2 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between flex-wrap gap-2 shrink-0 z-20">
        
        {/* Left: Material Selector Dropdown */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="relative">
            <button
              type="button"
              onClick={() => setMaterialDropdownOpen(!materialDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-xs font-bold transition-all cursor-pointer shadow-xs max-w-[260px] sm:max-w-md truncate"
            >
              <BookOpen className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
              <span className="truncate">
                {selectedMaterial ? (selectedMaterial.title || selectedMaterial.filename) : 'Selecionar Apostila...'}
              </span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60 shrink-0" />
            </button>

            {/* Dropdown Menu */}
            {materialDropdownOpen && (
              <div className="absolute left-0 top-full mt-1.5 w-80 sm:w-96 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-strong)] shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150 flex flex-col gap-2 max-h-96">
                
                {/* Search in Dropdown */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[var(--text-muted)]" />
                  <input
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Filtrar por nome ou matéria..."
                    className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)]"
                  />
                </div>

                {/* Subject Filter Pills */}
                <div className="flex items-center gap-1 overflow-x-auto scrollbar-none pb-1 text-[10px]">
                  <button
                    type="button"
                    onClick={() => setSelectedSubjectFilter('all')}
                    className={`px-2 py-0.5 rounded-full font-bold transition-colors cursor-pointer shrink-0 ${
                      selectedSubjectFilter === 'all'
                        ? 'bg-[var(--accent-primary)] text-white'
                        : 'bg-[var(--bg-surface)] hover:bg-[var(--bg-hover)] text-[var(--text-muted)]'
                    }`}
                  >
                    Todas ({materials.length})
                  </button>
                  {subjects.map((sub) => {
                    const count = materials.filter((m) => m.subject === sub.name).length;
                    if (count === 0) return null;
                    return (
                      <button
                        key={sub.name}
                        type="button"
                        onClick={() => setSelectedSubjectFilter(sub.name)}
                        className={`px-2 py-0.5 rounded-full font-bold transition-colors cursor-pointer shrink-0 ${
                          selectedSubjectFilter === sub.name
                            ? 'bg-[var(--accent-primary)] text-white'
                            : 'bg-[var(--bg-surface)] hover:bg-[var(--bg-hover)] text-[var(--text-muted)]'
                        }`}
                      >
                        {sub.name} ({count})
                      </button>
                    );
                  })}
                </div>

                {/* List of Materials */}
                <div className="overflow-y-auto space-y-1 max-h-56 pr-1">
                  {filteredMaterials.length > 0 ? (
                    filteredMaterials.map((mat) => {
                      const isSel = mat.id === selectedMaterialId;
                      return (
                        <button
                          key={mat.id}
                          type="button"
                          onClick={() => {
                            setSelectedMaterialId(mat.id);
                            setMaterialDropdownOpen(false);
                          }}
                          className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between gap-2 cursor-pointer ${
                            isSel
                              ? 'bg-[var(--accent-primary-glow)] border border-[var(--accent-primary)]/40 text-[var(--accent-primary)] font-bold'
                              : 'hover:bg-[var(--bg-hover)] text-[var(--text-secondary)] border border-transparent'
                          }`}
                        >
                          <div className="truncate pr-1 space-y-0.5">
                            <div className="truncate text-xs font-bold text-[var(--text-primary)]">
                              {mat.title || mat.filename}
                            </div>
                            <div className="text-[10px] font-mono text-[var(--text-muted)]">
                              {mat.subject} • {mat.total_pages || mat.theory_pages || 1} págs
                            </div>
                          </div>
                          {isSel && <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />}
                        </button>
                      );
                    })
                  ) : (
                    <div className="py-6 text-center text-xs text-[var(--text-muted)]">
                      Nenhuma apostila encontrada.
                    </div>
                  )}
                </div>

                {/* Upload Button inside dropdown */}
                <button
                  type="button"
                  onClick={() => {
                    setMaterialDropdownOpen(false);
                    setUploadModalOpen(true);
                  }}
                  className="w-full py-2 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-hover)] border border-dashed border-[var(--accent-primary)]/40 text-xs font-bold text-[var(--accent-primary)] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <UploadCloud className="w-3.5 h-3.5" />
                  <span>Subir Nova Apostila PDF (+20 XP)</span>
                </button>

              </div>
            )}
          </div>

          {/* Quick Subject Tag */}
          {selectedMaterial && (
            <span className="hidden md:inline-flex px-2 py-0.5 rounded-lg bg-[var(--accent-primary-glow)] border border-[var(--accent-primary)]/30 text-[11px] font-mono text-[var(--accent-primary)] font-bold truncate max-w-[200px]">
              {selectedMaterial.subject}
            </span>
          )}
        </div>

        {/* Right Actions: Upload, New Tab & Fullscreen */}
        <div className="flex items-center gap-2">
          {/* Upload Button */}
          <button
            type="button"
            onClick={() => setUploadModalOpen(true)}
            className="px-3 py-1.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            title="Adicionar arquivo PDF à biblioteca"
          >
            <UploadCloud className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span className="hidden sm:inline">Adicionar PDF</span>
          </button>

          {/* Open in New Window/Tab */}
          {selectedMaterial && (
            <a
              href={`#/reader/${selectedMaterial.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Abrir este PDF em uma janela dedicada / nova aba"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Abrir em Nova Aba</span>
            </a>
          )}
        </div>

      </header>

      {/* ============================================================ */}
      {/* 2. FULL VIEWPORT READING STAGE                               */}
      {/* ============================================================ */}
      <main className="flex-1 overflow-hidden p-1 sm:p-2">
        {loading ? (
          <div className="h-full flex flex-col items-center justify-center gap-3 text-center p-6">
            <div className="w-10 h-10 rounded-full border-3 border-[var(--accent-primary)] border-t-transparent animate-spin" />
            <p className="font-bold text-xs">Carregando estúdio de leitura e apostilas...</p>
          </div>
        ) : selectedMaterial && (selectedMaterial.pdfUrl || selectedMaterial.filepath) ? (
          <PdfReaderStudio
            key={selectedMaterial.id}
            materialId={selectedMaterial.id}
            pdfUrl={selectedMaterial.pdfUrl || `/uploads/${selectedMaterial.filename}`}
            title={selectedMaterial.title || selectedMaterial.filename}
            subject={selectedMaterial.subject || 'Geral'}
            initialPage={selectedMaterial.current_page || 1}
            totalPages={selectedMaterial.total_pages || selectedMaterial.theory_pages || 1}
            tableOfContents={selectedMaterial.tableOfContents || []}
            isStandalone={false}
          />
        ) : (
          /* Empty State */
          <div className="h-full flex flex-col items-center justify-center p-6 text-center max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[var(--accent-primary-glow)] border border-[var(--accent-primary)]/30 flex items-center justify-center text-[var(--accent-primary)] mb-4 shadow-xl">
              <FolderOpen className="w-8 h-8" />
            </div>

            <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
              Nenhuma Apostila PDF Encontrada
            </h3>
            <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed max-w-md">
              Envie o material em PDF da sua banca ({currentCareer.name}) para ler com grifos coloridos persistentes, anotações de margem e o Tutor IA integrado.
            </p>

            <button
              type="button"
              onClick={() => setUploadModalOpen(true)}
              className="mt-5 px-5 py-2.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:scale-102"
            >
              <UploadCloud className="w-4 h-4" />
              <span>Enviar Primeiro PDF (+20 XP)</span>
            </button>
          </div>
        )}
      </main>

      {/* ============================================================ */}
      {/* 3. MODAL DE UPLOAD DE APOSTILA PDF                           */}
      {/* ============================================================ */}
      {uploadModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-[var(--bg-card)] border border-[var(--border-strong)] rounded-2xl max-w-md w-full shadow-2xl p-6 space-y-4">
            
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
              <div className="flex items-center gap-2">
                <UploadCloud className="w-5 h-5 text-[var(--accent-primary)]" />
                <h3 className="font-bold text-sm text-[var(--text-primary)]">
                  Adicionar Apostila em PDF
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setUploadModalOpen(false)}
                className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleUploadSubmit} className="space-y-3.5 text-xs">
              {/* File input */}
              <div>
                <label className="block text-[11px] font-bold text-[var(--text-muted)] mb-1">
                  Arquivo PDF:
                </label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setUploadFile(file);
                    if (file && !uploadTitle) {
                      setUploadTitle(file.name.replace(/\.pdf$/i, ''));
                    }
                  }}
                  required
                  className="w-full p-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] file:mr-3 file:py-1 file:px-2.5 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[var(--accent-primary)] file:text-white cursor-pointer"
                />
              </div>

              {/* Title input */}
              <div>
                <label className="block text-[11px] font-bold text-[var(--text-muted)] mb-1">
                  Título da Apostila / Aula:
                </label>
                <input
                  type="text"
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  placeholder="Ex: Aula 01 - Tributos em Espécie e Princípios"
                  className="w-full p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)]"
                />
              </div>

              {/* Subject selector */}
              <div>
                <label className="block text-[11px] font-bold text-[var(--text-muted)] mb-1">
                  Disciplina / Matéria:
                </label>
                <select
                  value={uploadSubject}
                  onChange={(e) => setUploadSubject(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)]"
                >
                  {subjects.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end gap-2 pt-2 border-t border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => setUploadModalOpen(false)}
                  className="px-3.5 py-2 rounded-xl hover:bg-[var(--bg-hover)] text-[var(--text-muted)] font-semibold cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={uploading || !uploadFile}
                  className="px-4 py-2 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md disabled:opacity-50"
                >
                  {uploading ? (
                    <>
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Processando PDF...</span>
                    </>
                  ) : (
                    <>
                      <UploadCloud className="w-3.5 h-3.5" />
                      <span>Salvar e Começar Leitura</span>
                    </>
                  )}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
