export type SpreadType = string;

export interface TarotReading {
  question: string;
  spreadType: SpreadType;
  selectedCards: number[];
  timestamp: Date;
}

export interface SpreadPosition {
  position: number;
  name: string;
  description: string;
}

export interface SpreadData {
  name: string;
  description: string;
  positions: SpreadPosition[];
}

export interface SpreadsData {
  spreads: Record<string, SpreadData>;
}

export interface QuestionPattern {
  priority: number;
  spreadType: string;
  keywords: string[];
  regex: string[];
}

export interface QuestionPatterns {
  patterns: Record<string, QuestionPattern>;
}

