import React, { useState, useEffect, useRef } from 'react';
import { Card, Button, Badge, CarimboStatus } from './UIPrimitives';
import { 
  Headphones, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  X,
  Radio
} from 'lucide-react';
import { CAREERS_MAP } from '../utils/careers';

interface AudioFlashPlayerProps {
  careerId: string;
  isOpen: boolean;
  onClose: () => void;
}

interface AudioTrack {
  id: string;
  titulo: string;
  disciplina: string;
  conteudo: string;
  mnemonico?: string;
}

const AUDIO_TRACKS_DB: Record<string, AudioTrack[]> = {
  atrfb: [
    {
      id: 'atrfb_1',
      titulo: 'Princípios da Anterioridade e Legalidade Tributária',
      disciplina: 'Direito Tributário',
      conteudo: 'Atenção concurseiro da Receita Federal. O princípio da legalidade estrita exige lei para instituir ou majorar tributos. Exceções à anterioridade nonagesimal e anual incluem: Imposto de Importação, Imposto de Exportação, IOF e Imposto Extraordinário de Guerra.',
      mnemonico: 'Mnemônico dos impostos extrafiscais regulatórios: II, IE, IOF e IPI.'
    },
    {
      id: 'atrfb_2',
      titulo: 'Território Aduaneiro e Zonas Primária e Secundária',
      disciplina: 'Legislação Aduaneira',
      conteudo: 'O território aduaneiro compreende todo o território nacional. Zona primária abrange portos, aeroportos alfandegados e recintos alfandegados onde há trânsito internacional. Zona secundária é todo o restante do território.',
      mnemonico: 'Regra de ouro: Toda zona primária é alfandegada, mas nem todo recinto é zona primária.'
    }
  ],
  transpetro_adm: [
    {
      id: 'trans_adm_1',
      titulo: 'Funções Administrativas Clássicas (PODC)',
      disciplina: 'Noções de Administração',
      conteudo: 'Na banca Cesgranrio para a Transpetro, o processo administrativo clássico divide-se em quatro pilares: Planejar, Organizar, Dirigir e Controlar.',
      mnemonico: 'Mnemônico PODC: Planejamento define objetivos, Organização aloca recursos, Direção lidera pessoas, Controle monitora padrões.'
    },
    {
      id: 'trans_adm_2',
      titulo: 'Lei das Estatais nº 13.303 de 2016 e Governança',
      disciplina: 'Lei das Estatais',
      conteudo: 'A Lei 13.303 disciplina as sociedades de economia mista e empresas públicas. O comitê de auditoria estatutário é obrigatório e o conselho de administração deve ter membros independentes.',
      mnemonico: 'Dica Cesgranrio: Licitação nas estatais prioriza o pregão eletrônico e permite contratação semi-integrada.'
    }
  ],
  transpetro_log: [
    {
      id: 'trans_log_1',
      titulo: 'Curva ABC e Gestão de Estoques',
      disciplina: 'Gestão de Estoques',
      conteudo: 'Na logística da Transpetro, a Curva ABC baseia-se no princípio de Pareto. Classe A representa 20% dos itens e 80% do valor financeiro acumulado. Classe B intermediária e Classe C representa a maioria dos itens com baixo valor financeiro.',
      mnemonico: 'Regra Cesgranrio: Itens Classe A exigem controle diário rigoroso de acurácia de inventário.'
    }
  ],
  bb_comercial: [
    {
      id: 'bb_com_1',
      titulo: 'Estrutura do Sistema Financeiro Nacional',
      disciplina: 'Conhecimentos Bancários',
      conteudo: 'O Conselho Monetário Nacional é o órgão normativo supremo. O Banco Central do Brasil e a Comissão de Valores Mobiliários são entidades supervisoras. Os bancos múltiplos comerciais e de investimento são operadores.',
      mnemonico: 'Mnemônico: CMN Normatiza, BACEN Fiscaliza e Executa.'
    }
  ]
};

export const AudioFlashPlayer: React.FC<AudioFlashPlayerProps> = ({ careerId, isOpen, onClose }) => {
  const currentCareer = CAREERS_MAP[careerId] || { name: 'Carreira Ativa' };
  const tracks = AUDIO_TRACKS_DB[careerId] || AUDIO_TRACKS_DB['atrfb'];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rate, setRate] = useState<number>(1.25);
  const [synthSupported, setSynthSupported] = useState(true);

  const currentTrack = tracks[currentTrackIndex] || tracks[0];

  useEffect(() => {
    if (typeof window !== 'undefined' && !('speechSynthesis' in window)) {
      setSynthSupported(false);
    }
  }, []);

  // Parar fala ao desmontar ou fechar
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speakCurrentTrack = () => {
    if (!synthSupported || typeof window === 'undefined') return;
    window.speechSynthesis.cancel();

    const fullText = `${currentTrack.titulo}. Disciplina: ${currentTrack.disciplina}. ${currentTrack.conteudo} ${currentTrack.mnemonico || ''}`;
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'pt-BR';
    utterance.rate = rate;

    utterance.onend = () => {
      // Avança para a próxima faixa automaticamente em loop
      if (currentTrackIndex < tracks.length - 1) {
        setCurrentTrackIndex(prev => prev + 1);
      } else {
        setIsPlaying(false);
      }
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    if (!synthSupported) return;
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      speakCurrentTrack();
    }
  };

  const handleNext = () => {
    window.speechSynthesis.cancel();
    const nextIdx = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIdx);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    window.speechSynthesis.cancel();
    const prevIdx = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIdx);
    setIsPlaying(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-md animate-fade-in">
      <Card className="p-5 border-[var(--border-focus)] shadow-2xl bg-[var(--bg-surface)] backdrop-blur-md space-y-4">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="font-mono text-xs font-bold text-[var(--text-primary)]">
              MODO ÁUDIO FLASH • ESTUDO NO TRÂNSITO
            </span>
          </div>
          <button
            onClick={() => {
              window.speechSynthesis.cancel();
              setIsPlaying(false);
              onClose();
            }}
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Faixa Ativa */}
        <div className="space-y-1.5 p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
          <div className="flex items-center justify-between text-[11px] font-mono text-[var(--accent-primary)] font-bold">
            <span>FAIXA {currentTrackIndex + 1} DE {tracks.length}</span>
            <span>{currentTrack.disciplina}</span>
          </div>
          <div className="font-sans font-bold text-sm text-[var(--text-primary)]">
            {currentTrack.titulo}
          </div>
          <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
            {currentTrack.conteudo}
          </p>
        </div>

        {/* Controles de Reprodução */}
        <div className="flex items-center justify-between pt-1">
          {/* Seletor de Velocidade */}
          <div className="flex items-center gap-1">
            {[1, 1.25, 1.5].map((speed) => (
              <button
                key={speed}
                onClick={() => {
                  setRate(speed);
                  if (isPlaying) {
                    window.speechSynthesis.cancel();
                    setTimeout(speakCurrentTrack, 100);
                  }
                }}
                className={`px-2 py-1 rounded text-[11px] font-mono font-bold transition-all ${
                  rate === speed
                    ? 'bg-[var(--accent-primary)] text-white'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>

          {/* Botões Play / Prev / Next */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-lg bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={handlePlayPause}
              className="p-3 rounded-full bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-white shadow-md transition-all active:scale-95"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>

            <button
              onClick={handleNext}
              className="p-2 rounded-lg bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};
