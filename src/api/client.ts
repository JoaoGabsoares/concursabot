/**
 * ApiClient.ts
 * 
 * Cliente HTTP Orientado a Objetos (POO) com tipagem TypeScript estrita,
 * injeção transparente de headers de autenticação, perfil e tratamento de erros.
 * 
 * Padrões: Singleton Pattern, Typed Facade, Clean Code.
 */

import {
  UserProfile,
  DailyMission,
  Question,
  ErrorItem,
  Simulado,
  StudyMaterial,
  Flashcard,
  RedacaoCritique,
  AuthResponse,
  StudyCycle,
  StudyCycleBlock,
  CycleModelOption
} from '../types';

export class ApiClient {
  private readonly baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  /**
   * Obtém o token de autenticação armazenado.
   */
  public getAuthToken(): string | null {
    return localStorage.getItem('GABARITO_AUTH_TOKEN');
  }

  /**
   * Armazena ou remove o token de autenticação.
   */
  public setAuthToken(token: string | null): void {
    if (token) {
      localStorage.setItem('GABARITO_AUTH_TOKEN', token);
    } else {
      localStorage.removeItem('GABARITO_AUTH_TOKEN');
    }
  }

  /**
   * Método central de requisição HTTP com injeção de headers de segurança.
   */
  public async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const isAuthRoute = endpoint.startsWith('/auth/login') || 
                        endpoint.startsWith('/auth/register') || 
                        endpoint.startsWith('/auth/google') || 
                        endpoint.startsWith('/auth/config');
    const token = isAuthRoute ? null : this.getAuthToken();
    const currentUserId = (isAuthRoute || typeof localStorage === 'undefined') ? null : localStorage.getItem('CURRENT_USER_ID');
    const isFormData = typeof FormData !== 'undefined' && options.body instanceof FormData;
    
    const headers: Record<string, string> = {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...(token ? { 'Authorization': `Bearer ${token}`, 'x-account-token': token } : {}),
      ...(currentUserId ? { 'x-user-id': currentUserId } : {}),
      ...(options.headers as Record<string, string> || {})
    };

    let response: Response;
    try {
      response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers
      });
    } catch (netErr: unknown) {
      const msg = netErr instanceof Error ? netErr.message : String(netErr);
      if (msg.includes('Failed to fetch') || msg.includes('NetworkError') || msg.includes('ECONNREFUSED') || msg.includes('fetch failed')) {
        throw new Error('Não foi possível conectar ao servidor backend. Verifique se o servidor está ativo na porta 3000 (execute "npm run dev" ou "npm start").');
      }
      throw netErr instanceof Error ? netErr : new Error(String(netErr));
    }

    if (!response.ok) {
      if (response.status === 401 && !isAuthRoute) {
        this.setAuthToken(null);
        if (typeof localStorage !== 'undefined') {
          localStorage.removeItem('CURRENT_USER_ID');
        }
      }
      const errData = await response.json().catch(() => ({ error: response.statusText }));
      throw new Error(errData.error || `HTTP error ${response.status}`);
    }

    return response.json() as Promise<T>;
  }

  // --- MÓDULO DE AUTENTICAÇÃO ---
  public login(emailOrUsername: string, password: string): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: emailOrUsername,
        username: emailOrUsername,
        password
      })
    });
  }

  public loginWithGoogle(credential: string): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/google', {
      method: 'POST',
      body: JSON.stringify({ credential })
    });
  }

  public getAuthConfig(): Promise<{ googleClientId: string; authMethods: string[] }> {
    return this.request<{ googleClientId: string; authMethods: string[] }>('/auth/config');
  }

  public registerAccount(username: string, password: string, email?: string): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ username, password, email })
    });
  }

  public register(username: string, password: string, email?: string): Promise<AuthResponse> {
    return this.registerAccount(username, password, email);
  }

  public getAuthMe(): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/me');
  }

  public logout(): Promise<{ success: boolean }> {
    return this.request<{ success: boolean }>('/auth/logout', { method: 'POST' });
  }

  // --- MÓDULO DE PERFIS DE USUÁRIO ---
  public getUsers(): Promise<UserProfile[]> {
    return this.request<UserProfile[]>('/users');
  }

  public getUserProfiles(): Promise<any[]> {
    return this.request<any[]>('/users');
  }

  public getUser(id: string): Promise<UserProfile> {
    return this.request<UserProfile>(`/users/${id}`);
  }

  public getUserProfile(id: string): Promise<any> {
    return this.request<any>(`/users/${id}`);
  }

  public createUser(name: string, careerId: string): Promise<UserProfile> {
    return this.request<UserProfile>('/users', {
      method: 'POST',
      body: JSON.stringify({ name, active_career_id: careerId })
    });
  }

  public createUserProfile(payload: { name: string; active_career_id?: string; daily_hours?: number; experience_level?: string; careerId?: string }): Promise<any> {
    return this.request<any>('/users', {
      method: 'POST',
      body: JSON.stringify({
        name: payload.name,
        active_career_id: payload.active_career_id || payload.careerId || 'atrfb',
        daily_hours: payload.daily_hours || 4,
        experience_level: payload.experience_level || 'iniciante'
      })
    });
  }

  public updateUserProfile(id: string, updates: any): Promise<any> {
    return this.request<any>(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates)
    });
  }

  public deleteUserProfile(id: string): Promise<{ success: boolean }> {
    return this.request<{ success: boolean }>(`/users/${id}`, { method: 'DELETE' });
  }

  public switchCareer(userId: string, careerId: string): Promise<UserProfile> {
    return this.request<UserProfile>(`/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify({ active_career_id: careerId })
    });
  }

  // --- MÓDULO DE DASHBOARD & ESTATÍSTICAS ---
  public getDashboard(userId?: string, careerId?: string): Promise<DailyMission> {
    const params = new URLSearchParams();
    if (userId) params.append('userId', userId);
    if (careerId) params.append('careerId', careerId);
    const qs = params.toString() ? `?${params.toString()}` : '';
    return this.request<DailyMission>(`/dashboard/stats${qs}`);
  }

  public getDashboardStats(userId?: string, careerId?: string): Promise<any> {
    return this.getDashboard(userId, careerId);
  }

  public getGamification(userId?: string, careerId?: string): Promise<any> {
    const params = new URLSearchParams();
    if (userId) params.append('user_id', userId);
    if (careerId) params.append('career_id', careerId);
    const qs = params.toString() ? `?${params.toString()}` : '';
    return this.request<any>(`/gamification/status${qs}`);
  }

  // --- MÓDULO DE SALA DE ESTUDOS & CADÊNCIA ---
  public getMaterials(careerId?: string): Promise<{ materials: any[] }> {
    const qs = careerId ? `?careerId=${careerId}` : '';
    return this.request<{ materials: any[] }>(`/study-room/materials${qs}`);
  }

  public getStudyMaterials(careerId?: string): Promise<{ materials: any[] }> {
    return this.getMaterials(careerId);
  }

  public uploadStudyMaterial(formData: FormData, userId?: string, careerId?: string): Promise<any> {
    const params = new URLSearchParams();
    if (userId) params.append('userId', userId);
    if (careerId) params.append('careerId', careerId);
    const qs = params.toString() ? `?${params.toString()}` : '';
    return this.request<any>(`/study-room/upload${qs}`, {
      method: 'POST',
      body: formData
    });
  }

  public registerStudy(data: {
    materialId?: number;
    subject?: string;
    lessonNumber?: number;
    title?: string;
    currentPage?: number;
    totalPages?: number;
    isCompleted?: boolean;
    durationMinutes?: number;
    minutes?: number;
    completed?: boolean;
    notes?: string;
    careerId?: string;
  }): Promise<any> {
    return this.request<any>('/study-room/register-study', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  public updateBookmark(materialId: string | number, page: number): Promise<{ success: boolean }> {
    return this.request<{ success: boolean }>(`/study-room/materials/${materialId}/page`, {
      method: 'PUT',
      body: JSON.stringify({ page })
    });
  }

  public getReadingPace(materialId: string | number, userId?: string): Promise<any> {
    const qs = userId ? `?user_id=${userId}` : '';
    return this.request<any>(`/study-room/materials/${materialId}/pace${qs}`);
  }

  public deleteMaterial(materialId: string | number): Promise<{ success: boolean; message: string }> {
    return this.request<{ success: boolean; message: string }>(`/study-room/materials/${materialId}`, {
      method: 'DELETE'
    });
  }

  public deleteStudyMaterial(materialId: string | number): Promise<{ success: boolean; message: string }> {
    return this.deleteMaterial(materialId);
  }

  public generateNativeLesson(subject: string, lessonNumber: number, careerId: string): Promise<any> {
    return this.request<any>('/study-room/generate-native-lesson', {
      method: 'POST',
      body: JSON.stringify({ subject, lesson_number: lessonNumber, career_id: careerId })
    });
  }

  // --- MÓDULO DE QUESTÕES & CADERNO DE ERROS ---
  public getQuestions(subject?: string, careerId?: string, limit: number = 10): Promise<{ questions: Question[] }> {
    const params = new URLSearchParams();
    if (subject) params.append('subject', subject);
    if (careerId) params.append('careerId', careerId);
    params.append('limit', limit.toString());
    return this.request<{ questions: Question[] }>(`/questions?${params.toString()}`);
  }

  public answerQuestion(questionId: string | number, selectedOption: string, isCorrect: boolean, careerId?: string): Promise<any> {
    return this.request<any>('/questions/answer', {
      method: 'POST',
      body: JSON.stringify({ question_id: questionId, selected_option: selectedOption, is_correct: isCorrect, career_id: careerId })
    });
  }

  public getErrorNotebook(careerId?: string): Promise<any> {
    const qs = careerId ? `?careerId=${careerId}` : '';
    return this.request<any>(`/caderno-erros${qs}`);
  }

  // --- MÓDULO DE SIMULADOS ---
  public getSimulados(careerId?: string): Promise<Simulado[]> {
    const qs = careerId ? `?careerId=${careerId}` : '';
    return this.request<Simulado[]>(`/simulados${qs}`);
  }

  public createSimulado(careerId: string, numQuestions: number = 20, subject?: string): Promise<Simulado> {
    return this.request<Simulado>('/simulados/create', {
      method: 'POST',
      body: JSON.stringify({ career_id: careerId, num_questions: numQuestions, subject })
    });
  }

  // --- MÓDULO DE LEI SECA & JURISPRUDÊNCIA ---
  public getLeiSecaArtigos(careerId?: string): Promise<any> {
    const qs = careerId ? `?careerId=${careerId}` : '';
    return this.request<any>(`/leiseca/artigos${qs}`);
  }

  public getLeiSecaDesafio(careerId?: string, subject?: string): Promise<any> {
    const params = new URLSearchParams();
    if (careerId) params.append('careerId', careerId);
    if (subject) params.append('subject', subject);
    const qs = params.toString() ? `?${params.toString()}` : '';
    return this.request<any>(`/leiseca/desafio${qs}`);
  }

  public responderLeiSeca(data: {
    desafio_id?: string;
    desafioId?: string;
    palavra_selecionada?: string;
    palavraSelecionada?: string;
    selected_word?: string;
    tempo_gasto?: number;
    tempoGastoSegundos?: number;
    response_time_sec?: number;
    career_id?: string;
    careerId?: string;
  }): Promise<any> {
    return this.request<any>('/leiseca/responder', {
      method: 'POST',
      body: JSON.stringify({
        desafio_id: data.desafio_id || data.desafioId,
        palavra_selecionada: data.palavra_selecionada || data.palavraSelecionada || data.selected_word,
        tempo_gasto: data.tempo_gasto || data.tempoGastoSegundos || data.response_time_sec || 0,
        career_id: data.career_id || data.careerId
      })
    });
  }

  public getJurisprudenciaSumulas(careerId?: string, search?: string): Promise<any> {
    const params = new URLSearchParams();
    if (careerId) params.append('careerId', careerId);
    if (search) params.append('search', search);
    const qs = params.toString() ? `?${params.toString()}` : '';
    return this.request<any>(`/jurisprudencia/sumulas${qs}`);
  }

  // --- MÓDULO DE MATRIZ DE APROVEITAMENTO ---
  public getAproveitamentoCatalogo(): Promise<any> {
    return this.request<any>('/aproveitamento/catalogo');
  }

  public compararEditais(origem: string, destino: string, options?: { dailyHours?: number; daysPerWeek?: number; startDate?: string }): Promise<any> {
    return this.request<any>('/aproveitamento/comparar', {
      method: 'POST',
      body: JSON.stringify({ 
        origemCareerId: origem, 
        destinoCareerId: destino,
        dailyHours: options?.dailyHours || 2,
        daysPerWeek: options?.daysPerWeek || 6,
        startDate: options?.startDate
      })
    });
  }

  public sincronizarCronogramaAproveitamento(payload: {
    origemCareerId: string;
    destinoCareerId: string;
    cronogramaSemanal: any[];
    dailyHours?: number;
    daysPerWeek?: number;
  }): Promise<{ success: boolean; scheduleId: number; totalTasks: number; totalSemanas: number; message: string }> {
    return this.request<{ success: boolean; scheduleId: number; totalTasks: number; totalSemanas: number; message: string }>('/aproveitamento/sincronizar-cronograma', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  }

  // --- MÓDULO DE REDAÇÃO DISCURSIVA (CORRETOR POR IA) ---
  public getRedacaoTemas(careerId?: string): Promise<any[]> {
    const qs = careerId ? `?careerId=${careerId}` : '';
    return this.request<any[]>(`/redacao/temas${qs}`);
  }

  public corrigirRedacao(tema: string, texto: string, careerId?: string): Promise<RedacaoCritique> {
    return this.request<RedacaoCritique>('/redacao/corrigir', {
      method: 'POST',
      body: JSON.stringify({ tema, texto, careerId })
    });
  }

  public getRedacaoHistorico(careerId?: string): Promise<any[]> {
    const qs = careerId ? `?careerId=${careerId}` : '';
    return this.request<any[]>(`/redacao/historico${qs}`);
  }

  // --- MÓDULO DE FLASHCARDS & RAIO-X ---
  public getFlashcards(careerId?: string): Promise<Flashcard[]> {
    const qs = careerId ? `?careerId=${careerId}` : '';
    return this.request<Flashcard[]>(`/flashcards${qs}`);
  }

  public getEditalRaioX(careerId?: string): Promise<any> {
    const qs = careerId ? `?career=${careerId}` : '';
    return this.request<any>(`/edital/raiox${qs}`);
  }

  // --- MÓDULO DE CADERNO DE ERROS (EXTENSÕES) ---
  public retryErrorNotebook(id: number | string, selectedAnswer: number | string): Promise<any> {
    return this.request<any>(`/caderno-erros/${id}/retry`, {
      method: 'POST',
      body: JSON.stringify({ selectedAnswer })
    });
  }

  public updateErrorNotebookNotes(id: number | string, notes: string): Promise<any> {
    return this.request<any>(`/caderno-erros/${id}/notes`, {
      method: 'PUT',
      body: JSON.stringify({ notes })
    });
  }

  public deleteErrorNotebookItem(id: number | string): Promise<any> {
    return this.request<any>(`/caderno-erros/${id}`, {
      method: 'DELETE'
    });
  }

  // --- MÓDULO DE COMUNIDADE & CHAT EM TEMPO REAL ---
  public getCommunityChannels(careerId?: string): Promise<{ success: boolean; channels: any[] }> {
    const qs = careerId ? `?careerId=${careerId}` : '';
    return this.request<{ success: boolean; channels: any[] }>(`/community/channels${qs}`);
  }

  public getCommunityMessages(channelId: string, limit: number = 60): Promise<{ success: boolean; messages: any[] }> {
    return this.request<{ success: boolean; messages: any[] }>(`/community/messages/${channelId}?limit=${limit}`);
  }

  public sendCommunityMessage(payload: { 
    channelId: string; 
    messageText: string; 
    userName?: string; 
    userAvatar?: string; 
    careerBadge?: string; 
    careerId?: string;
    userId?: string;
  }): Promise<{ success: boolean; message: any }> {
    return this.request<{ success: boolean; message: any }>('/community/messages', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  }

  public reactCommunityMessage(messageId: number, emoji: string, channelId?: string, userId?: string): Promise<{ success: boolean; action: string; reactions: any[] }> {
    return this.request<{ success: boolean; action: string; reactions: any[] }>(`/community/messages/${messageId}/react`, {
      method: 'POST',
      body: JSON.stringify({ emoji, channelId, userId })
    });
  }

  // --- MÓDULO DE CICLOS DE ESTUDO INTELIGENTES ---
  public getActiveStudyCycle(userId?: string, careerId?: string): Promise<StudyCycle | null> {
    const params = new URLSearchParams();
    if (userId) params.append('userId', userId);
    if (careerId) params.append('careerId', careerId);
    const qs = params.toString() ? `?${params.toString()}` : '';
    return this.request<StudyCycle>(`/study-cycles/active${qs}`);
  }

  public generateStudyCycle(payload: {
    userId?: string;
    careerId?: string;
    modelType?: string;
    weeklyHours?: number;
    blockDurationMinutes?: number;
    examDate?: string | null;
    customDifficulties?: Record<string, number>;
    cycleName?: string;
    saveImmediately?: boolean;
  }): Promise<StudyCycle> {
    return this.request<StudyCycle>('/study-cycles/generate', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  }

  public advanceStudyCycleBlock(cycleId: string, blockId: number, userId?: string, careerId?: string): Promise<{ success: boolean; message: string; cycle: StudyCycle }> {
    return this.request<{ success: boolean; message: string; cycle: StudyCycle }>('/study-cycles/advance', {
      method: 'POST',
      body: JSON.stringify({ cycleId, blockId, userId, careerId })
    });
  }

  public updateStudyCycleBlock(blockId: number, data: Partial<StudyCycleBlock>): Promise<StudyCycleBlock> {
    return this.request<StudyCycleBlock>(`/study-cycles/blocks/${blockId}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  public getStudyCycleModels(): Promise<CycleModelOption[]> {
    return this.request<CycleModelOption[]>('/study-cycles/models');
  }

  public getStudyCycleSubjects(careerId?: string): Promise<any[]> {
    const qs = careerId ? `?careerId=${careerId}` : '';
    return this.request<any[]>(`/study-cycles/subjects${qs}`);
  }

  public deleteStudyCycle(cycleId: string, userId?: string, careerId?: string): Promise<{ success: boolean; message: string }> {
    const params = new URLSearchParams();
    if (userId) params.append('userId', userId);
    if (careerId) params.append('careerId', careerId);
    const qs = params.toString() ? `?${params.toString()}` : '';
    return this.request<{ success: boolean; message: string }>(`/study-cycles/${cycleId}${qs}`, {
      method: 'DELETE'
    });
  }

  // ============================================================
  // RAG KNOWLEDGE BASE APIS (3.600+ ATRFB MARKDOWN DOCS)
  // ============================================================
  public getRagStats(): Promise<{
    success: boolean;
    totalDocuments: number;
    totalChars: number;
    atrfb: {
      totalDocuments: number;
      totalChars: number;
      subjects: Array<{ subject: string; count: number; total_chars: number }>;
      moduleTypes: Array<{ module_type: string; count: number }>;
    };
  }> {
    return this.request('/rag/stats');
  }

  public searchRag(query: string, options?: { topK?: number; subject?: string; moduleType?: string }): Promise<{
    success: boolean;
    query: string;
    total: number;
    results: Array<{
      id: number;
      filePath: string;
      subject: string;
      moduleType: string;
      lessonNumber: string;
      title: string;
      tags: string[];
      articlesCited: string[];
      sumulasCited: string[];
      snippet: string;
      rankScore: number;
    }>;
  }> {
    return this.request('/rag/search', {
      method: 'POST',
      body: JSON.stringify({ query, ...options })
    });
  }

  public askRag(question: string, options?: { subject?: string; careerId?: string }): Promise<{
    success: boolean;
    question: string;
    answer: string;
    sources: Array<{
      title: string;
      subject: string;
      lessonNumber: string;
      moduleType: string;
      articlesCited: string[];
      sumulasCited: string[];
    }>;
  }> {
    return this.request('/rag/ask', {
      method: 'POST',
      body: JSON.stringify({ question, ...options })
    });
  }
}

// Singleton Instance Export
export const api = new ApiClient();
export const getAuthToken = () => api.getAuthToken();
export const setAuthToken = (token: string | null) => api.setAuthToken(token);
export const request = <T>(endpoint: string, options?: RequestInit) => api.request<T>(endpoint, options);
export default api;
