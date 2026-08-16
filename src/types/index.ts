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

export type ActiveTab = 'dashboard' | 'study' | 'simulados' | 'erros' | 'redacao' | 'edital' | 'flashcards' | 'settings';
