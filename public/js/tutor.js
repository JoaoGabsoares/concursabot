import { api } from './api.js';
import { parseMarkdown, showToast } from './utils.js';
import { getCareerConfig, getActiveCareerId } from './careers.js';

export async function render(container) {
  const activeCareerId = getActiveCareerId();
  const careerCfg = getCareerConfig(activeCareerId);

  const subjectOptions = (careerCfg.subjects || []).map((s, idx) => `
    <option value="${s.subject}" ${idx === 0 ? 'selected' : ''}>${s.subject}</option>
  `).join('') + '<option value="Geral / Orientação">Geral / Orientação</option>';

  const firstSubj = (careerCfg.subjects && careerCfg.subjects[0]?.subject) || 'o seu concurso';

  // Sugestões inteligentes de perguntas contextuais por carreira
  const suggestionsMap = {
    'ses_rj': [
      'Princípios Doutrinários vs Organizativos do SUS',
      'Artigos 196 a 200 da CF/88 na IBDO',
      'Fórmulas de Gotejamento e NR-32',
      'Pegadinhas frequentes de Legislação do SUS'
    ],
    'marinha_rm2': [
      'Diferença de Posto vs Graduação (Lei 6.880/80)',
      'Faltas Disciplinares e Recursos no RDM',
      'Regras de Tráfego Aquaviário na LESTA',
      'Questões clássicas de Sintaxe da DEnsM'
    ],
    'atrfb': [
      'Teoria Pentapartida dos Tributos no STF',
      'Hipóteses de Suspensão vs Extinção do CTN',
      'Tipos de Junções SQL em Fluência de Dados',
      'Estilo FGV em Casos Práticos de Tributário'
    ]
  };

  const defaultSuggestions = suggestionsMap[activeCareerId] || [
    'Explicar conceito fundamental da matéria',
    'Jurisprudência e Súmulas mais cobradas',
    'Como a banca examinadora costuma cobrar?',
    'Macete mnemônico para memorização'
  ];

  const chipsHtml = defaultSuggestions.map(chip => `
    <button class="tutor-suggestion-chip" data-prompt="${chip}">
      ${chip}
    </button>
  `).join('');

  container.innerHTML = `
    <div class="tutor-workspace-container slide-up">
      <!-- Painel Lateral Compacto -->
      <div class="tutor-sidebar-panel">
        <div class="tutor-sidebar-header">
          <div class="tutor-career-badge">
            <span class="doc-stamp revisao">${careerCfg.shortName}</span>
          </div>
          
          <div class="tutor-field-label">
            <span>Disciplina Foco</span>
          </div>
          <select id="chat-subject" class="tutor-select-compact">
            ${subjectOptions}
          </select>
          
          <button id="btn-new-chat" class="tutor-btn-new" title="Iniciar uma nova conversa">
            <span>Nova Conversa</span>
          </button>
        </div>
        
        <div class="tutor-history-section">
          <div class="tutor-field-label" style="margin-bottom:0.5rem;">
            <span>Histórico</span>
            <span id="tutor-history-count" style="opacity:0.7; font-size:0.68rem; font-family:var(--font-mono);">0 chats</span>
          </div>
          <div id="chat-history-list" class="tutor-history-list">
            <div style="font-size:0.8rem; color:var(--text-muted); padding:0.5rem; text-align:center;">Carregando histórico...</div>
          </div>
        </div>
      </div>
      
      <!-- Área Principal do Chat -->
      <div class="tutor-main-card">
        <!-- Topo da Conversa com Contexto -->
        <div class="tutor-chat-header">
          <div class="tutor-header-title">
            <div>
              <div style="font-weight:700; font-size:0.95rem; color:var(--text-primary);">Tutor IA Especialista</div>
              <div class="tutor-header-context">
                <span class="tutor-pill accent" id="tutor-active-subj-pill">${firstSubj}</span>
                <span class="tutor-pill">${careerCfg.banca || 'Banca Oficial'}</span>
              </div>
            </div>
          </div>
          
          <button id="btn-clear-feed" class="tutor-action-btn" title="Limpar mensagens desta tela" style="font-size:0.8rem;">
            Limpar Tela
          </button>
        </div>
        
        <!-- Feed de Mensagens Espaçoso -->
        <div id="chat-messages" class="tutor-messages-feed">
          <div class="tutor-bubble model">
            <div class="markdown-content">
              <p>Olá! Sou seu <strong>Tutor IA especialista</strong> no edital de <strong>${careerCfg.name}</strong>.</p>
              <p>Estou calibrado para a banca <strong>${careerCfg.banca || 'oficial'}</strong>. Qual sua dúvida sobre <strong>${firstSubj}</strong> hoje?</p>
            </div>
          </div>
        </div>
        
        <!-- Barra de Sugestões de Perguntas Rápidas -->
        <div class="tutor-suggestions-bar" id="tutor-suggestions-bar">
          <span style="font-size:0.75rem; color:var(--text-muted); margin-right:0.25rem;">Sugestões:</span>
          ${chipsHtml}
        </div>
        
        <!-- Dock Inferior de Entrada de Texto -->
        <div class="tutor-input-dock">
          <div class="tutor-input-wrapper">
            <textarea 
              id="chat-input" 
              class="tutor-textarea" 
              placeholder="Digite sua dúvida ou cole um artigo de lei para explicação... (Enter para enviar)" 
              rows="1"></textarea>
            <button id="btn-send" class="tutor-send-btn" title="Enviar mensagem (Enter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
          <div class="tutor-input-hint">
            <span>Pressione <strong>Enter ↵</strong> para enviar • <strong>Shift+Enter</strong> para nova linha</span>
            <span style="opacity:0.85; font-family:var(--font-mono); font-size:0.72rem;">Gemini 3.7 Flash</span>
          </div>
        </div>
      </div>
    </div>
  `;

  const input = document.getElementById('chat-input');
  const btnSend = document.getElementById('btn-send');
  const btnNewChat = document.getElementById('btn-new-chat');
  const btnClearFeed = document.getElementById('btn-clear-feed');
  const messagesDiv = document.getElementById('chat-messages');
  const subjectSelect = document.getElementById('chat-subject');
  const historyList = document.getElementById('chat-history-list');
  const historyCount = document.getElementById('tutor-history-count');
  const activeSubjPill = document.getElementById('tutor-active-subj-pill');
  const suggestionsBar = document.getElementById('tutor-suggestions-bar');
  
  let currentSessionId = null;
  let isTyping = false;

  // Auto-resize do textarea
  function autoResize() {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 140) + 'px';
  }
  input.addEventListener('input', autoResize);

  // Manipulação de chips de sugestão
  if (suggestionsBar) {
    suggestionsBar.querySelectorAll('.tutor-suggestion-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const promptText = chip.getAttribute('data-prompt') || chip.textContent.trim();
        input.value = promptText;
        autoResize();
        input.focus();
      });
    });
  }

  async function loadHistoryList() {
    try {
      const sessions = await api.tutor.getSessions(activeCareerId);
      if (!sessions || sessions.length === 0) {
        historyList.innerHTML = '<div style="font-size:0.8rem; color:var(--text-muted); padding:0.5rem; text-align:center;">Nenhum chat anterior.</div>';
        if (historyCount) historyCount.textContent = '0 chats';
        return;
      }

      if (historyCount) historyCount.textContent = `${sessions.length} chats`;
      historyList.innerHTML = '';

      sessions.forEach(s => {
        const item = document.createElement('div');
        const isActive = s.id === currentSessionId;
        item.className = `tutor-history-item ${isActive ? 'active' : ''}`;
        
        const titleSpan = document.createElement('span');
        titleSpan.className = 'tutor-history-title';
        titleSpan.textContent = s.title || s.subject || 'Chat';
        titleSpan.title = s.title || s.subject || 'Chat';
        
        const delBtn = document.createElement('button');
        delBtn.className = 'tutor-history-del';
        delBtn.innerHTML = '🗑️';
        delBtn.title = 'Excluir chat';
        delBtn.onclick = async (e) => {
          e.stopPropagation();
          if (confirm('Deseja excluir esta conversa?')) {
            await api.tutor.deleteSession(s.id);
            if (currentSessionId === s.id) {
              startNewChat();
            } else {
              loadHistoryList();
            }
          }
        };

        item.appendChild(titleSpan);
        item.appendChild(delBtn);

        item.onclick = () => loadSession(s.id, s.subject);
        historyList.appendChild(item);
      });
    } catch (e) {
      console.error('Falha ao carregar lista de chats:', e);
      historyList.innerHTML = '<div style="font-size:0.8rem; color:var(--text-muted); padding:0.5rem; text-align:center;">Histórico indisponível</div>';
    }
  }

  async function loadSession(sessionId, subject) {
    if (isTyping) return;
    currentSessionId = sessionId;
    if (subject) {
      subjectSelect.value = subject;
      if (activeSubjPill) activeSubjPill.textContent = subject;
    }
    
    messagesDiv.innerHTML = '<div style="text-align:center; padding:1.5rem; color:var(--text-muted); font-size:0.85rem;">Carregando mensagens...</div>';
    
    try {
      const data = await api.tutor.getHistory(sessionId);
      const messages = (data && data.messages) ? data.messages : (Array.isArray(data) ? data : []);
      
      messagesDiv.innerHTML = '';
      if (messages.length === 0) {
        messagesDiv.innerHTML = `
          <div class="tutor-bubble model">
            <div class="markdown-content">
              <p>Esta conversa está vazia. Como posso te ajudar com <strong>${subjectSelect.value}</strong> hoje?</p>
            </div>
          </div>`;
      } else {
        messages.forEach(m => {
          appendMessage(m.text, m.role === 'model' ? 'model' : 'user');
        });
      }
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
      loadHistoryList();
    } catch (e) {
      console.error('Erro ao carregar histórico da sessão:', e);
      messagesDiv.innerHTML = '<p style="color:var(--color-danger); padding:1rem;">Erro ao carregar mensagens desta conversa.</p>';
    }
  }

  function startNewChat() {
    if (isTyping) return;
    currentSessionId = null;
    messagesDiv.innerHTML = `
      <div class="tutor-bubble model">
        <div class="markdown-content">
          <p>Olá! Sou seu <strong>Tutor IA focado em concursos</strong>. Qual sua dúvida sobre <strong>${subjectSelect.value}</strong> hoje?</p>
        </div>
      </div>
    `;
    input.value = '';
    input.style.height = 'auto';
    loadHistoryList();
  }

  async function sendMessage() {
    const text = input.value.trim();
    if (!text || isTyping) return;
    
    input.value = '';
    input.style.height = 'auto';
    const subject = subjectSelect.value;
    
    // Add user message
    appendMessage(text, 'user');
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    // Add typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'tutor-bubble model';
    typingIndicator.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
    messagesDiv.appendChild(typingIndicator);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    isTyping = true;
    btnSend.disabled = true;
    
    // Prepare for streaming response
    const modelMsg = document.createElement('div');
    modelMsg.className = 'tutor-bubble model';
    const modelContent = document.createElement('div');
    modelContent.className = 'markdown-content';
    modelMsg.appendChild(modelContent);

    let currentHtml = '';
    let isFirstChunk = true;
    
    try {
      await api.tutor.chat(
        currentSessionId,
        text,
        subject,
        activeCareerId,
        (chunk) => {
          if (isFirstChunk) {
            if (typingIndicator.parentNode) typingIndicator.remove();
            if (!modelMsg.parentNode) messagesDiv.appendChild(modelMsg);
            isFirstChunk = false;
          }
          currentHtml += chunk;
          modelContent.innerHTML = parseMarkdown(currentHtml);
          messagesDiv.scrollTop = messagesDiv.scrollHeight;
        },
        (newSessionId) => {
          if (!currentSessionId || currentSessionId !== newSessionId) {
            currentSessionId = newSessionId;
            loadHistoryList();
          }
        }
      );

      // Adicionar ações na mensagem gerada pela IA
      if (!modelMsg.querySelector('.tutor-bubble-actions')) {
        const actionsDiv = createBubbleActions(currentHtml, subjectSelect.value);
        modelMsg.appendChild(actionsDiv);
      }

    } catch (e) {
      if (typingIndicator.parentNode) typingIndicator.remove();
      modelContent.innerHTML = '<p style="color:var(--color-danger)">Ocorreu um erro ao comunicar com o Tutor IA. Tente novamente.</p>';
      if (!modelMsg.parentNode) messagesDiv.appendChild(modelMsg);
    }
    
    isTyping = false;
    btnSend.disabled = false;
    loadHistoryList();
  }

  function createBubbleActions(text, subject) {
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'tutor-bubble-actions';
    
    const copyBtn = document.createElement('button');
    copyBtn.className = 'tutor-action-btn btn-copy-reply';
    copyBtn.innerHTML = '📋 Copiar';
    copyBtn.title = 'Copiar texto para área de transferência';
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(text);
      showToast('Explicação copiada!', 'success');
    };

    const flashcardBtn = document.createElement('button');
    flashcardBtn.className = 'tutor-action-btn btn-create-flashcard';
    flashcardBtn.innerHTML = '🗂️ Salvar em Flashcard';
    flashcardBtn.title = 'Salvar este resumo como um Flashcard de repetição espaçada';
    flashcardBtn.onclick = async () => {
      try {
        const lines = text.split('\n').filter(l => l.trim().length > 0);
        const frontText = lines[0]?.replace(/[#*`]/g, '').trim().substring(0, 80) || `Dúvida de ${subject}`;
        const backText = text.substring(0, 300) + (text.length > 300 ? '...' : '');

        flashcardBtn.disabled = true;
        flashcardBtn.innerHTML = '⏳ Salvando...';
        
        await api.flashcards.addSingleCard(subject || 'Geral', 'Tutor IA', frontText, backText);
        flashcardBtn.innerHTML = '✅ Salvo!';
        showToast(`✨ Flashcard adicionado ao seu deck de ${subject}!`, 'success');
      } catch (err) {
        console.error('Erro ao salvar flashcard:', err);
        flashcardBtn.innerHTML = '🗂️ Salvar em Flashcard';
        flashcardBtn.disabled = false;
        showToast('Erro ao salvar flashcard.', 'error');
      }
    };

    actionsDiv.appendChild(copyBtn);
    actionsDiv.appendChild(flashcardBtn);
    return actionsDiv;
  }

  btnSend.addEventListener('click', sendMessage);
  btnNewChat.addEventListener('click', startNewChat);

  btnClearFeed?.addEventListener('click', () => {
    startNewChat();
    showToast('Tela de chat limpa!', 'info');
  });

  subjectSelect.addEventListener('change', () => {
    const selectedSubj = subjectSelect.value;
    if (activeSubjPill) activeSubjPill.textContent = selectedSubj;
    if (!currentSessionId && messagesDiv.children.length <= 1) {
      startNewChat();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  function appendMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `tutor-bubble ${sender}`;
    if (sender === 'user') {
      div.innerHTML = `<p>${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`;
    } else {
      const content = document.createElement('div');
      content.className = 'markdown-content';
      content.innerHTML = parseMarkdown(text);
      div.appendChild(content);

      const actionsDiv = createBubbleActions(text, subjectSelect.value);
      div.appendChild(actionsDiv);
    }
    messagesDiv.appendChild(div);
  }

  // Load past history list on initial render
  loadHistoryList();
}

