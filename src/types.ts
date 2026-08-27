export type PantryCategory =
  | 'produce'
  | 'protein'
  | 'dairy'
  | 'grains'
  | 'pantry'
  | 'frozen'
  | 'other';

export interface PantryItem {
  id: string;
  name: string;
  category: PantryCategory;
  quantity?: number;
  unit?: string;
  addedAt: number;
  expiresAt?: number;
}

export interface PantryItemInput {
  name: string;
  category?: PantryCategory;
  quantity?: number;
  unit?: string;
  expiresAt?: number;
}

export type SuggestionSource = 'ai' | 'mock';

export interface AISuggestion {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  missingIngredients: string[];
  confidence: number;
  source: SuggestionSource;
  createdAt: number;
}

export type ShareMode = 'join' | 'compete';

export interface ScoreBreakdown {
  pantryCoverage: number;
  ingredientMatch: number;
  variety: number;
  total: number;
}

export interface ShareableResult {
  version: 1;
  mode: ShareMode;
  host: string;
  pantry: PantryItem[];
  suggestion: AISuggestion;
  score: ScoreBreakdown;
  challengeText?: string;
  createdAt: number;
}

export interface CompetitionEntry {
  id: string;
  name: string;
  score: number;
  suggestionId: string;
  submittedAt: number;
}

export interface CompetitionState {
  host: string;
  challengeText: string;
  startedAt: number;
  entries: CompetitionEntry[];
}

export type AppMode =
  | 'onboarding'
  | 'pantry'
  | 'suggestion'
  | 'share'
  | 'compete';

export interface AppState {
  mode: AppMode;
  pantry: PantryItem[];
  suggestion: AISuggestion | null;
  share: ShareableResult | null;
  competition: CompetitionState | null;
}