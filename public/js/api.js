// API Client Module

const BASE_URL = '/api';

export function getAuthHeaders() {
  const userId = localStorage.getItem('concursa_active_user_id') || 'user_joao';
  const examId = localStorage.getItem('concursa_active_exam') || 'atrfb';
  const invitePin = localStorage.getItem('concursa_invite_pin') || '';
  return {
    'Content-Type': 'application/json',
    'X-User-Id': userId,
    'X-Exam-Id': examId,
    'X-Invite-Pin': invitePin,
    'X-Invite-Code': invitePin
  };
}

async function fetchAPI(endpoint, options = {}) {
  try {
    const headers = {
      ...getAuthHeaders(),
      ...(options.headers || {})
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers
    }).catch(() => null);

    if (response && response.ok) {
      return await response.json();
    }

    if (response && response.status === 401) {
      const errData = await response.json().catch(() => ({}));
      if (errData.require_invite || errData.require_pin) {
        import('./invite-gate.js').then(m => m.showInviteGateModal());
        throw new Error(errData.error || 'Acesso restrito por convite.');
      }
    }
    
    // MOCK RESPONSES FOR FRONTEND DEMO
    console.warn(`[Mock API] Intercepted call to ${endpoint}`);
    return mockResponse(endpoint, options);
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Mocking logic to ensure the UI works flawlessly even without the backend
function mockResponse(endpoint, options) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (endpoint.includes('/dashboard')) {
        resolve({
          questions: { totalAnswered: 0, correctPct: 0 },
          flashcards: { dueCount: 0 },
          simulados: { totalCompleted: 0, avgScore: 0 },
          weakSubjects: [],
          strongSubjects: [],
          recentActivity: []
        });
      }
      else if (endpoint.includes('/questions/generate')) {
        resolve({
          questions: Array(5).fill(0).map((_, i) => ({
            id: `q${i}`,
            text: `(CESPE/CEBRASPE) Acerca dos direitos e garantias fundamentais, julgue o item a seguir. A Constituição de 1988... [Questão Simulada ${i+1}]`,
            options: ['Certo', 'Errado'],
            correctIndex: Math.random() > 0.5 ? 0 : 1,
            explanation: 'Conforme o art. 5º da CF/88, a afirmativa está correta/incorreta porque a regra geral estabelece que...'
          }))
        });
      }
      else if (endpoint.includes('/summaries/generate')) {
        resolve({
          id: Date.now().toString(),
          markdown: `### Resumo Gerado\n\n**Pontos Principais:**\n* Ponto 1 importante\n* Ponto 2 essencial\n\n> "A lei não excluirá da apreciação do Poder Judiciário lesão ou ameaça a direito."`
        });
      }
      else if (endpoint.includes('/edital/analyze')) {
        resolve({
          priorities: [
            { subject: 'Português', weight: 'Alto', tips: 'Foco em interpretação' },
            { subject: 'Direito Administrativo', weight: 'Alto', tips: 'Foco em Licitações' }
          ]
        });
      }
      else if (endpoint.includes('/flashcards/generate')) {
        resolve({ deckId: 'd1', count: 10 });
      }
      else if (endpoint.includes('/flashcards/decks')) {
        resolve([{ id: 'd1', name: 'Direito Constitucional - Art. 5', cardCount: 50, dueCount: 15 }]);
      }
      else {
        resolve({ success: true, data: [] });
      }
    }, 800);
  });
}

export const api = {
  tutor: {
    async chat(sessionId, message, subject, careerId, onChunk, onSessionId) {
      try {
        const activeCareer = careerId || localStorage.getItem('concursa_active_exam') || 'atrfb';
        const headers = {
          ...getAuthHeaders(),
          'X-Exam-Id': activeCareer
        };

        const response = await fetch(`${BASE_URL}/tutor/chat`, {
          method: 'POST',
          headers,
          body: JSON.stringify({ sessionId, message, subject, careerId: activeCareer })
        }).catch(() => null);

        if (response && response.ok) {
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let buffer = '';

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || ''; // Keep trailing incomplete line

            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed || !trimmed.startsWith('data:')) continue;

              try {
                const data = JSON.parse(trimmed.slice(5).trim());
                if (data.sessionId && onSessionId) {
                  onSessionId(data.sessionId);
                }
                if (data.chunk && onChunk) {
                  onChunk(data.chunk);
                }
                if (data.error) {
                  throw new Error(data.error);
                }
              } catch (parseErr) {
                console.warn('Erro ao decodificar evento SSE:', parseErr);
              }
            }
          }
        } else {
          // Mock SSE Streaming for UI demonstration if backend is unreachable
          const mockText = `Analisando sua dúvida sobre ${subject}...\n\nDe acordo com a jurisprudência dominante e a doutrina majoritária, a resposta correta envolve entender o princípio aplicável. Você gostaria de um exemplo prático sobre isso?`;
          let i = 0;
          const interval = setInterval(() => {
            if (i < mockText.length) {
              if (onChunk) onChunk(mockText[i]);
              i++;
            } else {
              clearInterval(interval);
            }
          }, 20);
        }
      } catch (e) {
        console.error('Tutor chat client error:', e);
        if (onChunk) onChunk("\n\n*Desculpe, ocorreu um erro ao gerar a resposta.*");
      }
    },
    getSessions: (careerId) => {
      const activeCareer = careerId || localStorage.getItem('concursa_active_exam') || 'atrfb';
      return fetchAPI(`/tutor/sessions?careerId=${encodeURIComponent(activeCareer)}`);
    },
    getHistory: (sessionId) => fetchAPI(`/tutor/history/${sessionId}`),
    deleteSession: (sessionId) => fetchAPI(`/tutor/sessions/${sessionId}`, { method: 'DELETE' }),
  },
  
  questions: {
    generate: (subject, topic, banca, count, type) => fetchAPI('/questions/generate', {
      method: 'POST', body: JSON.stringify({ subject, topic, banca, count, type })
    }),
    answer: (questionId, selectedAnswer) => fetchAPI('/questions/answer', {
      method: 'POST', body: JSON.stringify({ questionId, selectedAnswer })
    }),
    getStats: () => fetchAPI('/questions/stats'),
    getHistory: () => fetchAPI('/questions/history'),
  },
  
  simulados: {
    create: (subjects, banca, questionCount, timeMinutes) => fetchAPI('/simulados/create', {
      method: 'POST', body: JSON.stringify({ subjects, banca, questionCount, timeMinutes })
    }),
    createFromErrors: (limit = 15) => fetchAPI('/simulados/create-from-errors', {
      method: 'POST', body: JSON.stringify({ limit })
    }),
    finish: (simuladoId, answers, timeSpent) => fetchAPI(`/simulados/${simuladoId}/finish`, {
      method: 'POST', body: JSON.stringify({ answers, timeSpent })
    }),
    list: () => fetchAPI('/simulados'),
    get: (id) => fetchAPI(`/simulados/${id}`),
  },
  
  summaries: {
    generate: (text, type) => fetchAPI('/summaries/generate', {
      method: 'POST', body: JSON.stringify({ text, type })
    }),
    list: () => fetchAPI('/summaries'),
    get: (id) => fetchAPI(`/summaries/${id}`),
    delete: (id) => fetchAPI(`/summaries/${id}`, { method: 'DELETE' }),
  },
  
  edital: {
    analyze: (editalText, targetCargo) => fetchAPI('/edital/analyze', {
      method: 'POST', body: JSON.stringify({ editalText, targetCargo })
    }),
    list: () => fetchAPI('/edital'),
    get: (id) => fetchAPI(`/edital/${id}`),
  },
  
  flashcards: {
    generate: (topic, text, count) => fetchAPI('/flashcards/generate', {
      method: 'POST', body: JSON.stringify({ topic, text, count })
    }),
    getDecks: () => fetchAPI('/flashcards/decks'),
    getDeck: (deckId) => fetchAPI(`/flashcards/decks/${deckId}`),
    getReviewCards: () => fetchAPI('/flashcards/review'),
    reviewCard: (cardId, rating) => fetchAPI('/flashcards/review', {
      method: 'POST', body: JSON.stringify({ cardId, rating })
    }),
    deleteDeck: (deckId) => fetchAPI(`/flashcards/decks/${deckId}`, { method: 'DELETE' }),
    addSingleCard: (subject, topic, front, back) => fetchAPI('/flashcards/add-single', {
      method: 'POST', body: JSON.stringify({ subject, topic, front, back })
    }),
  },
  
  schedule: {
    generate: (subjects, hoursPerDay, daysPerWeek, examDate) => fetchAPI('/schedule/generate', {
      method: 'POST', body: JSON.stringify({ subjects, hoursPerDay, daysPerWeek, examDate })
    }),
    list: () => fetchAPI('/schedule'),
    get: (id) => fetchAPI(`/schedule/${id}`),
    toggleTask: (taskId, completed) => fetchAPI(`/schedule/task/${taskId}`, {
      method: 'PUT', body: JSON.stringify({ completed })
    }),
  },
  
  dashboard: {
    getStats: () => fetchAPI('/dashboard'),
  },
};
