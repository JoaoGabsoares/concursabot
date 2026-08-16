import { UserProfile, DailyMission, Question, ErrorItem, Simulado, RedacaoCritique, Flashcard, Career } from '../types';

const API_BASE = '/api';

export async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({ error: response.statusText }));
    throw new Error(errData.error || `HTTP error ${response.status}`);
  }

  return response.json();
}

export const api = {
  // Users & Profile (Full CRUD + Aliases)
  getUsers: () => request<UserProfile[]>('/users'),
  getUserProfiles: () => request<any[]>('/users'),
  getUser: (id: string) => request<UserProfile>(`/users/${id}`),
  getUserProfile: (id: string) => request<any>(`/users/${id}`),
  createUser: (name: string, careerId: string) => 
    request<UserProfile>('/users', { method: 'POST', body: JSON.stringify({ name, active_career_id: careerId }) }),
  createUserProfile: (payload: { name: string; active_career_id?: string; daily_hours?: number; experience_level?: string; careerId?: string }) =>
    request<any>('/users', { 
      method: 'POST', 
      body: JSON.stringify({
        name: payload.name,
        active_career_id: payload.active_career_id || payload.careerId || 'bb_comercial',
        daily_hours: payload.daily_hours || 2,
        experience_level: payload.experience_level || 'iniciante'
      }) 
    }),
  updateUserProfile: (id: string, payload: any) =>
    request<any>(`/users/${id}`, { method: 'PUT', body: JSON.stringify(payload) }),
  updateUserStats: (id: string, stats: Partial<UserProfile>) =>
    request<UserProfile>(`/users/${id}`, { method: 'PUT', body: JSON.stringify(stats) }),
  deleteUserProfile: (id: string) =>
    request<{ success: boolean }>(`/users/${id}`, { method: 'DELETE' }),
  
  // Dashboard & Mission
  getDashboardStats: (userId?: string, careerId?: string) => 
    request<{
      streak: number;
      xp: number;
      level: number;
      nextLevelXp: number;
      progressPercent: number;
      todayQuestions: number;
      goalQuestions: number;
      todayMinutes: number;
      goalMinutes: number;
      pendingErrorsCount: number;
      nextMission?: DailyMission;
    }>(`/dashboard/stats?userId=${userId || ''}&careerId=${careerId || ''}`),

  getScheduleToday: (careerId?: string) => 
    request<{ items: any[]; focusSubject: string }>(`/schedule/today?careerId=${careerId || ''}`),

  // Study Room & Materials (RAG 2.0)
  getStudyMaterials: (careerId?: string) => 
    request<{ materials: any[] }>(`/study-room/materials?careerId=${careerId || ''}`),
  getStudyCatalog: (careerId?: string) => 
    request<{ catalog: any[] }>(`/study-room/catalog?careerId=${careerId || ''}`),
  uploadStudyMaterial: async (formData: FormData, userId?: string, careerId?: string) => {
    const res = await fetch(`${API_BASE}/study-room/upload`, {
      method: 'POST',
      headers: {
        'x-user-id': userId || 'user_joao',
        'x-exam-id': careerId || 'atrfb'
      },
      body: formData
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: res.statusText }));
      throw new Error(err.error || `Erro no upload HTTP ${res.status}`);
    }
    return res.json();
  },

  // Questions & Simulado
  generateQuestions: (params: { subject: string; topic?: string; banca?: string; count?: number; careerId?: string }) =>
    request<{ questions: Question[] }>('/questions/generate', { method: 'POST', body: JSON.stringify(params) }),
  answerQuestion: (payload: { questionId: number | string; selectedOption: string; isCorrect: boolean; timeSpentSeconds?: number }) =>
    request<{ xpAwarded: number; correct: boolean; explanation: string }>('/questions/answer', { method: 'POST', body: JSON.stringify(payload) }),
  
  getSimulados: (careerId?: string) => 
    request<{ simulados: Simulado[] }>(`/simulados?careerId=${careerId || ''}`),
  createSimulado: (payload: { title: string; careerId: string; subjects: string[]; count: number }) =>
    request<{ simuladoId: number; questions: Question[] }>('/simulados/create', { method: 'POST', body: JSON.stringify(payload) }),

  // Caderno de Erros
  getCadernoErros: (status: 'pending' | 'mastered' | 'all' = 'pending', careerId?: string) =>
    request<{ errors: ErrorItem[]; total: number }>(`/caderno-erros?status=${status}&careerId=${careerId || ''}`),
  retryCadernoErro: (id: number, selectedOption: string) =>
    request<{ success: boolean; correct: boolean; xpAwarded: number }>(`/caderno-erros/${id}/retry`, { method: 'POST', body: JSON.stringify({ selectedOption }) }),
  updateCadernoNotes: (id: number, notes: string) =>
    request<{ success: boolean }>(`/caderno-erros/${id}/notes`, { method: 'PUT', body: JSON.stringify({ notes }) }),

  // Redação IA
  getRedacaoTemas: (careerId?: string) =>
    request<{ temas: Array<{ id: string; titulo: string; banca: string; contexto: string }> }>(`/redacao/temas?careerId=${careerId || ''}`),
  corrigirRedacao: (payload: { tema: string; texto: string; careerId?: string }) =>
    request<RedacaoCritique>('/redacao/corrigir', { method: 'POST', body: JSON.stringify(payload) }),
  getRedacaoHistorico: () =>
    request<{ historico: RedacaoCritique[] }>('/redacao/historico'),

  // Flashcards SM-2
  getFlashcardDecks: (careerId?: string) =>
    request<any[]>(`/flashcards/decks?careerId=${careerId || ''}`),
  getFlashcardCards: (deckId: number) =>
    request<Flashcard[]>(`/flashcards/deck/${deckId}`),
  generateFlashcards: (payload: { topic: string; subject?: string; careerId?: string }) =>
    request<{ success: boolean; cards: Flashcard[] }>('/flashcards/generate', { method: 'POST', body: JSON.stringify(payload) }),
  reviewFlashcard: (payload: { cardId: number; rating: number }) =>
    request<{ nextReviewDate: string; intervalDays: number; easeFactor: number }>('/flashcards/review', { method: 'POST', body: JSON.stringify(payload) }),

  // Raio-X & Pareto 80/20
  getRaioX: (careerId?: string) =>
    request<any>(`/edital/raiox?careerId=${careerId || ''}`)
};
