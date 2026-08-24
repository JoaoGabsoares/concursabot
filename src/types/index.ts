export interface UserProfile {
  id: string;
  name: string;
  careerId: string;
  active_career_id?: string;
  level: number;
  xp: number;
  dailyGoalMinutes: number;
  daily_hours?: number;
  dailyGoalQuestions: number;
  todayQuestions: number;
  todayMinutes: number;
  streakDays: number;
  avatar?: string;
  avatar_emoji?: string;
  created_at?: string;
}

export interface Career {
  id: string;
  name: string;
  shortName?: string;
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
  rewardXp?: number;
  isCompleted?: boolean;
  status?: string;
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
  notaTotal?: number;
  criterios?: {
    tema?: { nota: number; feedback: string };
    estrutura?: { nota: number; feedback: string };
    norma_culta?: { nota: number; feedback: string };
    argumentacao?: { nota: number; feedback: string };
  };
  criterio1_tema?: number;
  criterio2_estrutura?: number;
  criterio3_gramatica?: number;
  criterio4_argumentacao?: number;
  comentario_geral?: string;
  comentarioGeral?: string;
  comentario?: string;
  pontos_fortes?: string[];
  pontos_melhoria?: string[];
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
  | 'study-room' 
  | 'reader'
  | 'ciclos'
  | 'study-cycle'
  | 'simulados' 
  | 'erros' 
  | 'error-notebook' 
  | 'redacao' 
  | 'leiseca' 
  | 'aproveitamento' 
  | 'edital' 
  | 'flashcards' 
  | 'guia'
  | 'sobre'
  | 'settings'
  | 'settings_ajustes'
  | 'settings_guia'
  | 'settings_sobre';

export interface MaterialHighlight {
  id: number;
  material_id: number;
  user_id: string;
  page_number: number;
  text: string;
  color: 'yellow' | 'green' | 'purple' | 'red' | 'blue';
  note?: string | null;
  position?: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    rects?: Array<{ x: number; y: number; width: number; height: number }>;
  } | null;
  created_at: string;
}

export interface AccountInfo {
  id: string;
  username: string;
  email?: string | null;
  name?: string;
  avatar_url?: string | null;
  google_id?: string | null;
}

export interface AuthResponse {
  success?: boolean;
  authenticated?: boolean;
  token?: string;
  account?: AccountInfo | null;
  profiles?: UserProfile[];
  message?: string;
  error?: string;
}

export type CycleModelType = 'adaptativo' | 'pareto_80_20' | 'pre_edital' | 'data_prova' | 'micro_sprints';

export interface StudyCycleBlock {
  id?: number;
  cycle_id?: string;
  subject: string;
  order_index: number;
  duration_minutes: number;
  cognitive_group: 'exatas_dados' | 'juridico' | 'humanas_linguagens';
  weight_score?: number;
  difficulty_level?: number;
  status: 'pending' | 'in_progress' | 'completed';
  completed_count?: number;
  last_completed_at?: string | null;
  created_at?: string;
}

export interface CycleSimulationResult {
  cycleTotalHours: number;
  daysPerLap: number;
  weeklyHours: number;
  daysUntilExam?: number | null;
  weeksUntilExam?: number | null;
  totalLapsUntilExam?: number | null;
  projectedTotalStudyHours?: number | null;
  projectedQuestions?: number | null;
}

export interface StudyCycle {
  id: string;
  user_id: string;
  career_id: string;
  name: string;
  model_type: CycleModelType;
  weekly_hours: number;
  block_duration_minutes: number;
  exam_date?: string | null;
  total_cycle_minutes: number;
  current_block_index: number;
  completed_cycles_count: number;
  is_active: boolean;
  settings?: {
    customDifficulties?: Record<string, number>;
    simulation?: CycleSimulationResult;
    generatedAt?: string;
  };
  blocks: StudyCycleBlock[];
  created_at?: string;
  updated_at?: string;
}

export interface CycleModelOption {
  id: CycleModelType;
  name: string;
  tag: string;
  description: string;
  idealFor: string;
  recommendedBlockMin: number;
}


