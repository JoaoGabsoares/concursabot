import React, { useState, useEffect, useRef } from 'react';
import { Card, Button, Badge, CarimboStatus } from '../../components/UIPrimitives';
import { useToast } from '../../components/Toast';
import { api } from '../../api/client';
import { getCareerById } from '../../utils/careers';
import { UserProfile } from '../../types';
import { 
  MessageSquare, 
  Send, 
  Bot, 
  Sparkles, 
  Users, 
  Hash, 
  Radio, 
  Smile, 
  Lightbulb, 
  Flame, 
  CheckCircle, 
  Heart,
  HelpCircle,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';

interface CommunityPageProps {
  careerId: string;
  user: UserProfile | null;
}

interface Channel {
  id: string;
  career_id: string;
  name: string;
  description: string;
  icon: string;
}

interface MessageReaction {
  emoji: string;
  count: number;
  userIds: string[];
}

interface CommunityMessage {
  id: number;
  channel_id: string;
  user_id: string;
  user_name: string;
  user_avatar: string;
  career_badge: string;
  message_text: string;
  is_ai_response: number;
  reactions?: MessageReaction[];
  created_at: string;
}

const REACTION_EMOJIS = ['💡', '🔥', '✅', '❤️'];

export const CommunityPage: React.FC<CommunityPageProps> = ({ careerId, user }) => {
  const { success, error: toastError } = useToast();
  const currentCareer = getCareerById(careerId);
  
  const [channels, setChannels] = useState<Channel[]>([]);
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
  const [messages, setMessages] = useState<CommunityMessage[]>([]);
  const [loadingChannels, setLoadingChannels] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [inputText, setInputText] = useState('');
  const [sending, setSending] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const eventSourceRef = useRef<EventSource | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 1. Carrega os canais da carreira
  useEffect(() => {
    async function loadChannels() {
      setLoadingChannels(true);
      try {
        const res = await api.getCommunityChannels(careerId);
        if (res.channels && res.channels.length > 0) {
          setChannels(res.channels);
          setSelectedChannel(res.channels[0]);
        }
      } catch (err) {
        console.error('Erro ao carregar canais:', err);
      } finally {
        setLoadingChannels(false);
      }
    }
    loadChannels();
  }, [careerId]);

  // 2. Carrega histórico de mensagens ao trocar de canal
  useEffect(() => {
    if (!selectedChannel) return;

    async function loadMessages() {
      setLoadingMessages(true);
      try {
        const res = await api.getCommunityMessages(selectedChannel.id, 60);
        if (res.messages) {
          setMessages(res.messages);
          setTimeout(scrollToBottom, 100);
        }
      } catch (err) {
        console.error('Erro ao carregar mensagens:', err);
      } finally {
        setLoadingMessages(false);
      }
    }

    loadMessages();

    // 3. Conecta ao stream SSE em tempo real
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
    }

    const sse = new EventSource(`/api/community/stream/${selectedChannel.id}`);
    eventSourceRef.current = sse;

    sse.onopen = () => {
      setIsConnected(true);
    };

    sse.addEventListener('message', (event) => {
      try {
        const newMsg: CommunityMessage = JSON.parse(event.data);
        setMessages((prev) => {
          // Evita duplicar se já estiver na lista
          if (prev.some((m) => m.id === newMsg.id)) return prev;
          return [...prev, newMsg];
        });
        setTimeout(scrollToBottom, 50);
      } catch (e) {
        console.error('Erro ao processar mensagem SSE:', e);
      }
    });

    sse.addEventListener('reaction', (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === data.messageId ? { ...m, reactions: data.reactions } : m
          )
        );
      } catch (e) {
        console.error('Erro ao processar reação SSE:', e);
      }
    });

    sse.onerror = () => {
      setIsConnected(false);
    };

    return () => {
      sse.close();
    };
  }, [selectedChannel?.id]);

  // 4. Envio de Mensagem
  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || !selectedChannel || sending) return;

    const textToSend = inputText.trim();
    setInputText('');
    setSending(true);

    try {
      await api.sendCommunityMessage({
        channelId: selectedChannel.id,
        messageText: textToSend,
        userName: user?.name || 'Estudante',
        userAvatar: '👨‍🎓',
        careerBadge: currentCareer.name.split('—')[0]?.trim() || 'Concurseiro',
        careerId
      });
    } catch (err: any) {
      toastError('Erro ao enviar mensagem', err.message);
      setInputText(textToSend); // restaura texto
    } finally {
      setSending(false);
    }
  };

  // 5. Injetar menção @GabaritoAI
  const handleMentionBot = () => {
    setInputText((prev) => (prev ? `${prev} @GabaritoAI ` : '@GabaritoAI '));
  };

  // 6. Alternar Reação Emoji
  const handleToggleReaction = async (messageId: number, emoji: string) => {
    try {
      await api.reactCommunityMessage(messageId, emoji, selectedChannel?.id);
    } catch (err) {
      console.error('Erro ao reagir:', err);
    }
  };

  return (
    <div className="space-y-6 pb-20 font-sans animate-fade-in max-w-7xl mx-auto">
      {/* Header Institucional */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
              Comunidade & Salas de Estudo
            </h1>
            <CarimboStatus status="homologado" label={currentCareer.banca} />
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
            Espaço colaborativo em tempo real para concurseiros focados em <strong className="text-[var(--text-primary)]">{currentCareer.name}</strong>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border ${
            isConnected 
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
              : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
          }`}>
            <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            {isConnected ? 'LIVE SYNC (SSE)' : 'CONECTANDO...'}
          </span>
        </div>
      </div>

      {/* Grid Principal: Sidebar de Canais + Feed do Chat */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[620px]">
        {/* Sidebar de Canais */}
        <div className="lg:col-span-1 space-y-3">
          <div className="p-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl">
            <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-[var(--color-border-subtle)]">
              <span className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1.5">
                <Hash className="w-3.5 h-3.5" /> CANAIS DO EDITAL
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">{channels.length}</span>
            </div>

            <div className="space-y-1">
              {loadingChannels ? (
                <div className="p-4 text-center text-xs font-mono text-[var(--text-muted)]">Carregando canais...</div>
              ) : (
                channels.map((ch) => {
                  const isActive = selectedChannel?.id === ch.id;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => setSelectedChannel(ch)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all flex items-start gap-2.5 ${
                        isActive
                          ? 'bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-semibold border border-[var(--color-primary)]/20 shadow-sm'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--color-surface-elevated)]'
                      }`}
                    >
                      <span className="text-base leading-none mt-0.5">{ch.icon || '💬'}</span>
                      <div className="flex-1 min-w-0">
                        <div className="truncate text-xs font-mono font-bold">{ch.name}</div>
                        <div className="text-[11px] text-[var(--text-muted)] truncate font-sans">{ch.description}</div>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* Card Dica do Tutor IA */}
          <div className="p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-primary)]">
              <Bot className="w-4 h-4" />
              <span>TUTOR IA NO GRUPO</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Marque <code className="px-1.5 py-0.5 bg-[var(--color-surface-elevated)] text-[var(--color-primary)] rounded font-mono font-semibold">@GabaritoAI</code> em qualquer dúvida de matéria para receber explicações com fundamentação em lei e mnemônicos.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={handleMentionBot}
              className="w-full text-xs font-mono flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Chamar @GabaritoAI
            </Button>
          </div>
        </div>

        {/* Feed de Conversa e Envio */}
        <div className="lg:col-span-3 flex flex-col bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
          {/* Header do Canal Selecionado */}
          <div className="px-5 py-3.5 bg-[var(--color-surface-elevated)] border-b border-[var(--color-border)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl">{selectedChannel?.icon || '💬'}</span>
              <div>
                <h2 className="text-sm font-mono font-bold text-[var(--text-primary)]">
                  {selectedChannel?.name || 'Selecione um canal'}
                </h2>
                <p className="text-xs text-[var(--text-muted)]">
                  {selectedChannel?.description}
                </p>
              </div>
            </div>
            <div className="text-xs font-mono text-[var(--text-muted)]">
              {messages.length} mensagens
            </div>
          </div>

          {/* Área de Mensagens (Scrollable) */}
          <div className="flex-1 p-5 overflow-y-auto space-y-4 max-h-[480px] min-h-[380px]">
            {loadingMessages ? (
              <div className="h-full flex items-center justify-center text-xs font-mono text-[var(--text-muted)]">
                Carregando histórico do canal...
              </div>
            ) : messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-2">
                <MessageSquare className="w-10 h-10 text-[var(--text-muted)] opacity-40" />
                <h3 className="font-display font-semibold text-sm text-[var(--text-primary)]">
                  Nenhuma mensagem ainda neste canal
                </h3>
                <p className="text-xs text-[var(--text-muted)] max-w-sm">
                  Seja o primeiro a enviar uma dúvida ou estratégia, ou chame o <strong className="text-[var(--color-primary)]">@GabaritoAI</strong> para puxar assunto sobre o edital.
                </p>
              </div>
            ) : (
              messages.map((msg) => {
                const isBot = Boolean(msg.is_ai_response);
                const isMe = msg.user_id === (user?.id || 'user_joao');

                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-3 animate-fade-in ${
                      isBot ? 'bg-[var(--color-surface-elevated)] p-4 rounded-xl border border-[var(--color-primary)]/20 shadow-sm' : ''
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-[var(--color-border)] flex items-center justify-center text-base flex-shrink-0 select-none shadow-sm">
                      {isBot ? '🤖' : msg.user_avatar || '👨‍🎓'}
                    </div>

                    <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs font-mono font-bold ${isBot ? 'text-[var(--color-primary)]' : 'text-[var(--text-primary)]'}`}>
                          {msg.user_name}
                        </span>
                        {isBot ? (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[var(--color-primary)] text-white tracking-wide">
                            TUTOR OFICIAL
                          </span>
                        ) : msg.career_badge ? (
                          <span className="px-1.5 py-0.2 text-[10px] font-mono text-[var(--text-muted)] bg-[var(--color-surface-elevated)] rounded border border-[var(--color-border-subtle)]">
                            {msg.career_badge}
                          </span>
                        ) : null}
                        <span className="text-[10px] font-mono text-[var(--text-muted)]">
                          {new Date(msg.created_at).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>

                      <div className={`text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                        isBot ? 'text-[var(--text-primary)] font-serif' : 'text-[var(--text-secondary)]'
                      }`}>
                        {msg.message_text}
                      </div>

                      {/* Reações */}
                      <div className="flex items-center gap-1.5 pt-1 flex-wrap">
                        {REACTION_EMOJIS.map((emoji) => {
                          const existing = msg.reactions?.find((r) => r.emoji === emoji);
                          const hasReacted = existing?.userIds.includes(user?.id || 'user_joao');

                          return (
                            <button
                              key={emoji}
                              onClick={() => handleToggleReaction(msg.id, emoji)}
                              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-mono transition-all ${
                                hasReacted
                                  ? 'bg-[var(--color-primary-subtle)] border border-[var(--color-primary)]/40 text-[var(--color-primary)] font-bold'
                                  : 'bg-[var(--color-surface-elevated)] hover:bg-[var(--color-border)] text-[var(--text-muted)] border border-[var(--color-border-subtle)]'
                              }`}
                            >
                              <span>{emoji}</span>
                              {existing && existing.count > 0 && <span>{existing.count}</span>}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Barra de Input & Envio */}
          <div className="p-3.5 bg-[var(--color-surface-elevated)] border-t border-[var(--color-border)]">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleMentionBot}
                title="Mencionar Tutor IA"
                className="p-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-primary)] hover:bg-[var(--color-primary-subtle)] transition-all flex items-center gap-1 text-xs font-mono"
              >
                <Bot className="w-4 h-4" />
                <span className="hidden sm:inline">@Tutor</span>
              </button>

              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={`Envie sua mensagem em #${selectedChannel?.name || 'geral'}...`}
                className="flex-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] font-sans"
              />

              <Button
                type="submit"
                variant="brand"
                disabled={!inputText.trim() || sending}
                className="px-4 py-2.5 font-mono text-xs flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Enviar</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
