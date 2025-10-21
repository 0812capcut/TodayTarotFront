import { SpreadType } from "@/types/tarot";

export function recommendSpread(question: string): SpreadType {
  const lowerQuestion = question.toLowerCase();
  
  // 복합 키워드 패턴 분석
  const analyzeQuestion = (q: string) => {
    // 2배열법 - 선택/결정 패턴
    const choicePatterns = [
      /살지\s*말지/, /할지\s*안할지/, /어느\s*것/, /둘\s*중/, 
      /선택|결정|vs|어느|둘|고르|택하/
    ];
    
    // 10배열법 - 인생 전체 패턴  
    const lifePatterns = [
      /인생|전체|모든|종합|평생|일생/
    ];
    
    // 7배열법 - 진로/장기 패턴
    const careerPatterns = [
      /진로|운명|장기|계획|미래|전망|목표/
    ];
    
    // 5배열법 - 상황 분석 패턴
    const situationPatterns = [
      /상황|문제|해결|극복|투자|주식|경제|어떻게|왜|이유|원인|분석/
    ];
    
    return {
      isChoice: choicePatterns.some(pattern => pattern.test(q)),
      isLife: lifePatterns.some(pattern => pattern.test(q)),
      isCareer: careerPatterns.some(pattern => pattern.test(q)),
      isSituation: situationPatterns.some(pattern => pattern.test(q))
    };
  };
  
  const analysis = analyzeQuestion(lowerQuestion);
  
  // 우선순위에 따른 배열법 결정
  if (analysis.isChoice) return 2;
  if (analysis.isLife) return 10;
  if (analysis.isCareer) return 7;
  if (analysis.isSituation) return 5;
  
  // 기본값: 3배열법
  return 3;
}

export function getSpreadDescription(spreadType: SpreadType): string {
  const descriptions: Record<SpreadType, string> = {
    2: "두 가지 선택지를 비교하는 배열법입니다.",
    3: "과거, 현재, 미래를 살펴보는 기본 배열법입니다.",
    5: "상황을 깊이 분석하는 배열법입니다.",
    7: "장기적인 전망과 진로를 보는 배열법입니다.",
    10: "인생 전체를 조망하는 켈틱 크로스 배열법입니다.",
  };
  
  return descriptions[spreadType];
}
