export interface UserProfile {
  id: string;
  name: string;
  careerId: string;
  level: number;
  xp: number;
  dailyGoalMinutes: number;
  dailyGoalQuestions: number;
  todayQuestions: number;
  todayMinutes: number;
  streakDays: number;
  created_at?: string;
}

export interface Career {
  id: string;
  name: string;
  banca: string;
  color?: string;
  description: string;
  tags?: string[];
  totalQuestions?: number;
  totalLessons?: number;
}

export interface DailyMission {
  subject: string;
  topic: string;
  lessonId?: string;
  materialId?: number;
  revisionType?: 'D+1' | 'D+7' | 'D+30' | 'NOVA_AULA';
  estimatedMinutes: number;
  isCompleted?: boolean;
}

export interface Question {
  id: number | string;
  subject: string;
  topic?: string;
  banca?: string;
  year?: number | string;
  difficulty?: 'facil' | 'medio' | 'dificil';
  question: string;
  options: { [key: string]: string } | string[];
  answer: string;
  explanation: string;
  careerId?: string;
}

export interface ErrorItem {
  id: number;
  question_id: number;
  question_text: string;
  user_answer: string;
  correct_answer: string;
  explanation: string;
  subject: string;
  topic?: string;
  banca?: string;
  personal_notes?: string;
  status: 'pending' | 'mastered';
  created_at: string;
}

export interface Simulado {
  id: number | string;
  title: string;
  career_id?: string;
  total_questions: number;
  score?: number;
  percentage?: number;
  duration_minutes?: number;
  status: 'pending' | 'completed';
  created_at: string;
}

export interface RedacaoCritique {
  id?: number;
  tema: string;
  texto: string;
  nota_total: number;
  criterios: {
    tema: { nota: number; feedback: string };
    estrutura: { nota: number; feedback: string };
    norma_culta: { nota: number; feedback: string };
    argumentacao: { nota: number; feedback: string };
  };
  comentario_geral: string;
  pontos_fortes: string[];
  pontos_melhoria: string[];
  created_at?: string;
}

export interface Flashcard {
  id: number;
  front: string;
  back: string;
  subject: string;
  topic?: string;
  interval: number;
  repetitions: number;
  ease_factor: number;
  due_date: string;
}

export interface StudyMaterial {
  id: number;
  career_id?: string;
  user_id?: string;
  subject: string;
  title: string;
  file_path?: string;
  extracted_text?: string;
  total_pages?: number;
  current_page?: number;
  is_completed?: boolean;
  notes?: string;
  created_at?: string;
}

export type ActiveTab = 
  | 'dashboard' 
  | 'study' 
  | 'simulados' 
  | 'erros' 
  | 'redacao' 
  | 'leiseca'
  | 'aproveitamento'
  | 'edital' 
  | 'flashcards' 
  | 'comunidade'
  | 'guia'
  | 'sobre'
  | 'settings'
  | 'settings_ajustes'
  | 'settings_guia'
  | 'settings_sobre';

export interface AccountInfo {
  id: string;
  username: string;
  email?: string | null;
}

export interface AuthResponse {
  authenticated: boolean;
  token?: string;
  account: AccountInfo | null;
  profiles: UserProfile[];
}

