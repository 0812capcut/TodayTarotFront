import { SpreadsData, QuestionPatterns, SpreadData, QuestionPattern } from "@/types/tarot";

// JSON 데이터를 동적으로 로드하는 함수들
let spreadsData: SpreadsData | null = null;
let questionPatterns: QuestionPatterns | null = null;

export async function loadSpreadsData(): Promise<SpreadsData> {
  if (spreadsData) {
    return spreadsData;
  }
  
  try {
    const response = await fetch('/data/spreads.json');
    spreadsData = await response.json();
    return spreadsData;
  } catch (error) {
    console.error('Failed to load spreads data:', error);
    throw new Error('스프레드 데이터를 로드할 수 없습니다.');
  }
}

export async function loadQuestionPatterns(): Promise<QuestionPatterns> {
  if (questionPatterns) {
    return questionPatterns;
  }
  
  try {
    const response = await fetch('/data/questionPatterns.json');
    questionPatterns = await response.json();
    return questionPatterns;
  } catch (error) {
    console.error('Failed to load question patterns:', error);
    throw new Error('질문 패턴 데이터를 로드할 수 없습니다.');
  }
}

export async function getSpreadData(spreadType: string): Promise<SpreadData | null> {
  const data = await loadSpreadsData();
  return data.spreads[spreadType] || null;
}

export async function getSpreadPositions(spreadType: string) {
  const spreadData = await getSpreadData(spreadType);
  return spreadData?.positions || [];
}

export async function getSpreadDescription(spreadType: string): Promise<string> {
  const spreadData = await getSpreadData(spreadType);
  return spreadData?.description || "알 수 없는 스프레드입니다.";
}

export async function getSpreadName(spreadType: string): Promise<string> {
  const spreadData = await getSpreadData(spreadType);
  return spreadData?.name || "알 수 없는 스프레드";
}

export async function getAllPatterns(): Promise<QuestionPattern[]> {
  const data = await loadQuestionPatterns();
  return Object.values(data.patterns).sort((a, b) => a.priority - b.priority);
}

export async function findMatchingPattern(question: string): Promise<string | null> {
  const patterns = await getAllPatterns();
  const lowerQuestion = question.toLowerCase();
  
  for (const pattern of patterns) {
    // 키워드 매칭
    const keywordMatch = pattern.keywords.some(keyword => 
      lowerQuestion.includes(keyword.toLowerCase())
    );
    
    if (keywordMatch) {
      return pattern.spreadType;
    }
    
    // 정규표현식 매칭
    const regexMatch = pattern.regex.some(regexStr => {
      try {
        const regex = new RegExp(regexStr, 'i');
        return regex.test(lowerQuestion);
      } catch (error) {
        console.warn(`Invalid regex pattern: ${regexStr}`, error);
        return false;
      }
    });
    
    if (regexMatch) {
      return pattern.spreadType;
    }
  }
  
  return null;
}

// 캐시 초기화 함수 (개발 중 데이터 변경 시 사용)
export function clearCache(): void {
  spreadsData = null;
  questionPatterns = null;
}
