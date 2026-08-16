import React, { useState, useEffect } from 'react';
import { Card, Button, Badge, CarimboStatus, ProgressBar } from '../../components/UIPrimitives';
import { api } from '../../api/client';
import { 
  BookOpen, 
  Target, 
  Zap, 
  Timer, 
  Award, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Scale,
  Search,
  Filter
} from 'lucide-react';
import { CAREERS_MAP } from '../../utils/careers';

interface LeiSecaPageProps {
  careerId: string;
}

interface ArtigoLeiSeca {
  id: string;
  lei: string;
  diploma: string;
  artigo: string;
  banca: string;
  tema: string;
  textoOriginal: string;
}

interface DesafioLeiSeca {
  desafioId: string;
  diploma: string;
  artigo: string;
  banca: string;
  tema: string;
  textoComErro: string;
  tempoLimiteSegundos: number;
  recompensaXP: number;
}

interface ResultadoResposta {
  acertou: boolean;
  palavraCorreta: string;
  substituicaoEsperada: string;
  explicacao: string;
  textoOriginal: string;
  xpGanho: number;
}

interface SumulaItem {
  id: string;
  tribunal: string;
  tipo: string;
  numero: string;
  materia: string;
  tema: string;
  enunciado: string;
  pegadinhaBanca: {
    banca: string;
    alerta: string;
  };
  relevancia: string;
}

export const LeiSecaPage: React.FC<LeiSecaPageProps> = ({ careerId }) => {
  const currentCareer = CAREERS_MAP[careerId] || {
    id: careerId,
    name: 'Carreira em Foco',
    banca: 'Banca Oficial'
  };

  const [activeSubTab, setActiveSubTab] = useState<'caca_pegadinha' | 'artigos_ouro' | 'jurisprudencia'>('caca_pegadinha');
  const [artigos, setArtigos] = useState<ArtigoLeiSeca[]>([]);
  const [sumulas, setSumulas] = useState<SumulaItem[]>([]);
  const [loadingArtigos, setLoadingArtigos] = useState(false);
  const [loadingSumulas, setLoadingSumulas] = useState(false);
  const [busca, setBusca] = useState('');
  const [tribunalFiltro, setTribunalFiltro] = useState<string>('TODOS');

  // Estados do Jogo Caça-Pegadinhas
  const [desafio, setDesafio] = useState<DesafioLeiSeca | null>(null);
  const [loadingDesafio, setLoadingDesafio] = useState(false);
  const [tempoRestante, setTempoRestante] = useState(15);
  const [jogoIniciado, setJogoIniciado] = useState(false);
  const [jogoEncerrado, setJogoEncerrado] = useState(false);
  const [resultado, setResultado] = useState<ResultadoResposta | null>(null);
  const [palavraSelecionada, setPalavraSelecionada] = useState<string>('');
  
  // Métricas do usuário na sessão
  const [acertosSessao, setAcertosSessao] = useState(0);
  const [totalJogados, setTotalJogados] = useState(0);
  const [xpAcumuladoSessao, setXpAcumuladoSessao] = useState(0);

  // Carrega artigos de ouro
  useEffect(() => {
    async function loadArtigos() {
      setLoadingArtigos(true);
      try {
        const data = await api.getLeiSecaArtigos(careerId);
        if (data.artigos) setArtigos(data.artigos);
      } catch (err) {
        console.error('Erro ao carregar artigos de lei seca:', err);
      } finally {
        setLoadingArtigos(false);
      }
    }
    loadArtigos();
  }, [careerId]);

  // Carrega súmulas e jurisprudência
  useEffect(() => {
    async function loadSumulas() {
      setLoadingSumulas(true);
      try {
        const data = await api.getJurisprudenciaSumulas(careerId);
        if (data.sumulas) setSumulas(data.sumulas);
      } catch (err) {
        console.error('Erro ao carregar súmulas:', err);
      } finally {
        setLoadingSumulas(false);
      }
    }
    loadSumulas();
  }, [careerId]);

  // Carrega novo desafio
  const carregarNovoDesafio = async () => {
    setLoadingDesafio(true);
    setResultado(null);
    setPalavraSelecionada('');
    setJogoEncerrado(false);
    setTempoRestante(15);
    try {
      const data = await api.getLeiSecaDesafio(careerId);
      setDesafio(data);
      setJogoIniciado(true);
    } catch (err) {
      console.error('Erro ao carregar desafio:', err);
    } finally {
      setLoadingDesafio(false);
    }
  };

  // Timer do Caça-Pegadinhas
  useEffect(() => {
    let interval: any = null;
    if (jogoIniciado && !jogoEncerrado && tempoRestante > 0) {
      interval = setInterval(() => {
        setTempoRestante(prev => {
          if (prev <= 1) {
            tratarTempoEsgotado();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [jogoIniciado, jogoEncerrado, tempoRestante]);

  const tratarTempoEsgotado = () => {
    setJogoEncerrado(true);
    setTotalJogados(prev => prev + 1);
  };

  const handleSubmeterPalavra = async (palavra: string) => {
    if (jogoEncerrado || !desafio) return;
    setPalavraSelecionada(palavra);
    setJogoEncerrado(true);

    try {
      const tempoGasto = 15 - tempoRestante;
      const data = await api.responderLeiSeca({
        desafioId: desafio.desafioId,
        palavraSelecionada: palavra,
        tempoGastoSegundos: tempoGasto,
        careerId
      });
      setResultado(data);
      setTotalJogados(prev => prev + 1);
      if (data.acertou) {
        setAcertosSessao(prev => prev + 1);
        setXpAcumuladoSessao(prev => prev + (data.xpGanho || 10));
      }
    } catch (err) {
      console.error('Erro ao submeter resposta:', err);
    }
  };

  const sumulasFiltradas = sumulas.filter(s => {
    const matchTribunal = tribunalFiltro === 'TODOS' || s.tribunal === tribunalFiltro;
    const matchBusca = busca === '' || 
      s.numero.toLowerCase().includes(busca.toLowerCase()) ||
      s.tema.toLowerCase().includes(busca.toLowerCase()) ||
      s.enunciado.toLowerCase().includes(busca.toLowerCase());
    return matchTribunal && matchBusca;
  });

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header Institucional */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <CarimboStatus status="homologado" label="LEI SECA & JURISPRUDÊNCIA • ALTA RETENÇÃO" />
            <Badge variant="brand">{currentCareer.banca}</Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)]">
            Lei Seca Ativa & Súmulas dos Tribunais
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] font-mono">
            Treine a literalidade da lei, desarme pegadinhas de bancas e domine as súmulas mais cobradas pelo edital.
          </p>
        </div>

        {/* Estatísticas da Sessão */}
        <div className="flex items-center gap-3 bg-[var(--bg-elevated)] p-2.5 rounded-xl border border-[var(--border-subtle)]">
          <div className="text-center px-2">
            <div className="text-xs font-mono text-[var(--text-muted)]">DESAFIOS</div>
            <div className="text-base font-mono font-bold text-[var(--text-primary)]">{totalJogados}</div>
          </div>
          <div className="h-6 w-px bg-[var(--border-subtle)]" />
          <div className="text-center px-2">
            <div className="text-xs font-mono text-[var(--text-muted)]">ACERTOS</div>
            <div className="text-base font-mono font-bold text-[var(--color-status-success)]">
              {totalJogados > 0 ? `${Math.round((acertosSessao / totalJogados) * 100)}%` : '0%'}
            </div>
          </div>
          <div className="h-6 w-px bg-[var(--border-subtle)]" />
          <div className="text-center px-2">
            <div className="text-xs font-mono text-[var(--text-muted)]">XP GANHO</div>
            <div className="text-base font-mono font-bold text-[var(--accent-primary)]">+{xpAcumuladoSessao} XP</div>
          </div>
        </div>
      </div>

      {/* Seletor de Abas */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[var(--border-subtle)] pb-2">
        <button
          onClick={() => setActiveSubTab('caca_pegadinha')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all ${
            activeSubTab === 'caca_pegadinha'
              ? 'bg-[var(--accent-primary)] text-white shadow-md'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]'
          }`}
        >
          <Target className="w-4 h-4" />
          <span>CAÇA-PEGADINHA DA LEI (15s)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('jurisprudencia')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all ${
            activeSubTab === 'jurisprudencia'
              ? 'bg-[var(--accent-primary)] text-white shadow-md'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]'
          }`}
        >
          <Scale className="w-4 h-4" />
          <span>SÚMULAS & JURISPRUDÊNCIA ({sumulas.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('artigos_ouro')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all ${
            activeSubTab === 'artigos_ouro'
              ? 'bg-[var(--accent-primary)] text-white shadow-md'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>ARTIGOS DE OURO ({artigos.length})</span>
        </button>
      </div>

      {/* ABA 1: CAÇA-PEGADINHA */}
      {activeSubTab === 'caca_pegadinha' && (
        <div className="space-y-6">
          {!desafio ? (
            <Card className="p-8 text-center space-y-4 max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-[var(--accent-primary-glow)] border border-[var(--accent-primary)]/30 flex items-center justify-center mx-auto text-[var(--accent-primary)]">
                <Zap className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-display font-bold text-[var(--text-primary)]">
                Como Funciona o Caça-Pegadinhas?
              </h2>
              <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
                Você terá <strong>15 segundos</strong> para ler um artigo oficial da legislação cobrada pela banca. 
                Uma única palavra foi sutilmente alterada para torná-lo incorreto. 
                <strong> Clique na palavra com erro para pontuar!</strong>
              </p>
              <div className="pt-2">
                <Button 
                  variant="brand" 
                  size="lg" 
                  icon={Sparkles}
                  onClick={carregarNovoDesafio}
                  disabled={loadingDesafio}
                >
                  {loadingDesafio ? 'Carregando Artigo...' : 'Iniciar Desafio (+10 a +15 XP)'}
                </Button>
              </div>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Painel do Desafio */}
              <div className="lg:col-span-8 space-y-4">
                <Card className="p-6 space-y-5 border-[var(--border-focus)]">
                  {/* Topo do Artigo */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2">
                      <Badge variant="brand">{desafio.diploma}</Badge>
                      <span className="font-mono text-xs font-bold text-[var(--text-primary)]">
                        {desafio.artigo}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Timer className={`w-4 h-4 ${tempoRestante <= 5 ? 'text-red-500 animate-pulse' : 'text-[var(--accent-primary)]'}`} />
                      <span className={`font-mono text-sm font-bold ${tempoRestante <= 5 ? 'text-red-500' : 'text-[var(--text-primary)]'}`}>
                        00:{tempoRestante.toString().padStart(2, '0')}s
                      </span>
                    </div>
                  </div>

                  {/* Tema */}
                  <div className="text-xs font-mono text-[var(--text-muted)]">
                    TEMA: {desafio.tema} • BANCA: {desafio.banca}
                  </div>

                  {/* Texto do Artigo Interativo */}
                  <div className="p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-3">
                    <div className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>Clique na palavra ou expressão que a banca adulterou:</span>
                    </div>

                    <div className="text-sm sm:text-base font-sans leading-relaxed text-[var(--text-primary)] flex flex-wrap gap-1.5">
                      {desafio.textoComErro.split(' ').map((palavra, idx) => {
                        const cleanWord = palavra.replace(/[.,;:]/g, '');
                        const isSelected = palavraSelecionada === cleanWord;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleSubmeterPalavra(cleanWord)}
                            disabled={jogoEncerrado}
                            className={`px-1.5 py-0.5 rounded transition-all cursor-pointer select-none font-medium ${
                              isSelected
                                ? 'bg-blue-600 text-white font-bold'
                                : 'hover:bg-[var(--bg-active)] hover:text-blue-400 active:scale-95'
                            } ${jogoEncerrado ? 'cursor-default' : ''}`}
                          >
                            {palavra}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Feedback Imediato */}
                  {resultado && (
                    <div className={`p-4 rounded-xl border animate-fade-in space-y-3 ${
                      resultado.acertou 
                        ? 'bg-[var(--color-status-success-bg)] border-[var(--color-status-success)]/30 text-[var(--color-status-success)]' 
                        : 'bg-[var(--color-status-danger-bg)] border-[var(--accent-danger)]/30 text-[var(--color-status-danger)]'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {resultado.acertou ? (
                            <>
                              <CheckCircle2 className="w-5 h-5" />
                              <span className="font-bold text-sm">GABARITOU! Palavra adulterada identificada com sucesso.</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-5 h-5" />
                              <span className="font-bold text-sm">ATENÇÃO À PEGADINHA DA BANCA!</span>
                            </>
                          )}
                        </div>
                        {resultado.xpGanho > 0 && (
                          <Badge variant="success">+{resultado.xpGanho} XP</Badge>
                        )}
                      </div>

                      <div className="text-xs text-[var(--text-primary)] space-y-1.5 bg-[var(--bg-surface)] p-3 rounded-lg border border-[var(--border-subtle)]">
                        <div>
                          <strong>Palavra adulterada:</strong> <span className="text-red-400 font-mono line-through">{resultado.palavraCorreta}</span> &rarr; <strong>Termo correto da lei:</strong> <span className="text-emerald-400 font-mono font-bold">{resultado.substituicaoEsperada}</span>
                        </div>
                        <div className="text-[var(--text-secondary)] leading-relaxed">
                          <strong>💡 Como a banca cobra:</strong> {resultado.explicacao}
                        </div>
                        <div className="text-[var(--text-muted)] font-mono text-[11px] pt-1">
                          <strong>📜 Texto Oficial:</strong> "{resultado.textoOriginal}"
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tempo Esgotado sem resposta */}
                  {tempoRestante === 0 && !resultado && (
                    <div className="p-4 rounded-xl bg-[var(--color-status-warning-bg)] border border-[var(--color-status-warning)]/30 text-[var(--color-status-warning)] space-y-2">
                      <div className="flex items-center gap-2 font-bold text-sm">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Tempo esgotado! Em prova você teria 15 segundos para julgar este item.</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]">
                        Dica: Tente ler buscando diretamente palavras como "vedado", "dispensável", "obrigatório" e prazos numéricos.
                      </p>
                    </div>
                  )}

                  {/* Ações */}
                  <div className="flex justify-end pt-2">
                    <Button 
                      variant="brand" 
                      icon={RotateCcw}
                      onClick={carregarNovoDesafio}
                      disabled={loadingDesafio}
                    >
                      Próximo Desafio de Lei Seca &rarr;
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Coluna Lateral: Guia Estratégico */}
              <div className="lg:col-span-4 space-y-4">
                <Card className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-primary)] font-bold">
                    <Award className="w-4 h-4" />
                    <span>DIRETRIZ DE LEI SECA</span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-[var(--text-primary)]">
                    As 3 Pegadinhas Favoritas das Bancas:
                  </h3>
                  <ul className="text-xs text-[var(--text-secondary)] space-y-2 font-sans leading-relaxed">
                    <li className="p-2 rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                      <strong>1. Troca de Vocábulos Opostos:</strong> "É vedado" &harr; "É facultado"; "Competência privativa" &harr; "Competência concorrente".
                    </li>
                    <li className="p-2 rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                      <strong>2. Adição de Palavras Restritivas:</strong> "exclusivamente", "em qualquer hipótese", "salvo prévia autorização".
                    </li>
                    <li className="p-2 rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                      <strong>3. Inversão de Sanções:</strong> "demissão" trocada por "suspensão" em faltas graves.
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ABA 2: SÚMULAS E JURISPRUDÊNCIA */}
      {activeSubTab === 'jurisprudencia' && (
        <div className="space-y-6">
          {/* Barra de Filtros */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Pesquisar por súmula, tema ou tribunal (ex: Nepotismo, SV 13, PAD)..."
                className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] outline-none focus:border-[var(--border-focus)] font-medium"
              />
            </div>
            <div className="flex items-center gap-1.5">
              {['TODOS', 'STF', 'STJ', 'TST'].map((trib) => (
                <button
                  key={trib}
                  onClick={() => setTribunalFiltro(trib)}
                  className={`px-3 py-2 rounded-lg font-mono text-xs font-bold transition-all ${
                    tribunalFiltro === trib
                      ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                      : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                >
                  {trib}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Súmulas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sumulasFiltradas.map((sum) => (
              <Card key={sum.id} className="p-5 space-y-3.5 hoverable border-[var(--border-subtle)]">
                <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2">
                    <Badge variant="brand">{sum.tribunal}</Badge>
                    <span className="font-mono text-xs font-bold text-[var(--text-primary)]">{sum.numero}</span>
                  </div>
                  <Badge variant="outline">{sum.materia}</Badge>
                </div>

                <div>
                  <h4 className="font-sans font-bold text-sm text-[var(--text-primary)]">
                    {sum.tema}
                  </h4>
                  <div className="text-[11px] font-mono text-emerald-400 mt-0.5">
                    {sum.relevancia}
                  </div>
                </div>

                <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                  "{sum.enunciado}"
                </p>

                {/* Caixa de Pegadinha da Banca */}
                <div className="p-3 rounded-lg bg-[var(--color-status-warning-bg)] border border-[var(--color-status-warning)]/30 text-xs text-[var(--color-status-warning)] space-y-1">
                  <div className="font-bold font-mono text-[11px] flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span>PEGADINHA DA BANCA ({sum.pegadinhaBanca.banca}):</span>
                  </div>
                  <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                    {sum.pegadinhaBanca.alerta}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* ABA 3: ARTIGOS DE OURO DA CARREIRA */}
      {activeSubTab === 'artigos_ouro' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[var(--text-muted)]">
              Mostrando {artigos.length} artigos com incidência confirmada em editais anteriores
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {artigos.map(art => (
              <Card key={art.id} className="p-5 space-y-3 hoverable">
                <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2">
                    <Badge variant="brand">{art.diploma}</Badge>
                    <span className="font-mono text-xs font-bold text-[var(--text-primary)]">{art.artigo}</span>
                  </div>
                  <Badge variant="outline">{art.banca}</Badge>
                </div>
                <div className="text-xs font-mono text-[var(--text-muted)] font-semibold">
                  {art.tema}
                </div>
                <p className="text-xs text-[var(--text-primary)] font-sans leading-relaxed p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                  "{art.textoOriginal}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
