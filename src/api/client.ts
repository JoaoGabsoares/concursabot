/**
 * ApiClient.ts
 * 
 * Cliente HTTP Orientado a Objetos (POO) com tipagem TypeScript estrita,
 * injeção transparente de headers de autenticação, perfil e tratamento de erros.
 * 
 * Padrões: Singleton Pattern, Typed Facade, Clean Code.
 */

import { UserProfile, DailyMission, Question, ErrorItem, Simulado, RedacaoCritique, Flashcard, Career, AuthResponse } from '../types';

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
    const token = this.getAuthToken();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}`, 'x-account-token': token } : {}),
      ...(options.headers as Record<string, string> || {})
    };

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({ error: response.statusText }));
      throw new Error(errData.error || `HTTP error ${response.status}`);
    }

    return response.json();
  }

  // --- MÓDULO DE AUTENTICAÇÃO ---
  public login(username: string, password: string): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });
  }

  public registerAccount(username: string, password: string, email?: string): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ username, password, email })
    });
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

  public updateBookmark(materialId: string, page: number): Promise<{ success: boolean }> {
    return this.request<{ success: boolean }>(`/study-room/materials/${materialId}/page`, {
      method: 'PUT',
      body: JSON.stringify({ page })
    });
  }

  public getReadingPace(materialId: string, userId?: string): Promise<any> {
    const qs = userId ? `?user_id=${userId}` : '';
    return this.request<any>(`/study-room/materials/${materialId}/pace${qs}`);
  }

  public deleteMaterial(materialId: string): Promise<{ success: boolean; message: string }> {
    return this.request<{ success: boolean; message: string }>(`/study-room/materials/${materialId}`, {
      method: 'DELETE'
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

  public answerQuestion(questionId: string, selectedOption: string, isCorrect: boolean, careerId?: string): Promise<any> {
    return this.request<any>('/questions/answer', {
      method: 'POST',
      body: JSON.stringify({ question_id: questionId, selected_option: selectedOption, is_correct: isCorrect, career_id: careerId })
    });
  }

  public getErrorNotebook(careerId?: string): Promise<ErrorItem[]> {
    const qs = careerId ? `?careerId=${careerId}` : '';
    return this.request<ErrorItem[]>(`/caderno-erros${qs}`);
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

  // --- MÓDULO DE REDAÇÃO DISCURSIVA (CORRETOR POR IA) ---
  public getRedacaoTemas(careerId?: string): Promise<any[]> {
    const qs = careerId ? `?careerId=${careerId}` : '';
    return this.request<any[]>(`/redacao/temas${qs}`);
  }

  public corrigirRedacao(temaId: string, texto: string, careerId?: string): Promise<RedacaoCritique> {
    return this.request<RedacaoCritique>('/redacao/corrigir', {
      method: 'POST',
      body: JSON.stringify({ tema_id: temaId, texto, career_id: careerId })
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
}

// Singleton Instance Export
export const api = new ApiClient();
export const getAuthToken = () => api.getAuthToken();
export const setAuthToken = (token: string | null) => api.setAuthToken(token);
export const request = <T>(endpoint: string, options?: RequestInit) => api.request<T>(endpoint, options);
export default api;
