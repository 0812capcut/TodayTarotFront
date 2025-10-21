export type SpreadType = 2 | 3 | 5 | 7 | 10;

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

export const spreadPositions: Record<SpreadType, SpreadPosition[]> = {
  2: [
    { position: 0, name: "A 선택지", description: "첫 번째 선택의 결과" },
    { position: 1, name: "B 선택지", description: "두 번째 선택의 결과" },
  ],
  3: [
    { position: 0, name: "과거", description: "상황의 뿌리와 원인" },
    { position: 1, name: "현재", description: "현재의 상황과 영향" },
    { position: 2, name: "미래", description: "앞으로의 전개" },
  ],
  5: [
    { position: 0, name: "현재 상황", description: "지금의 위치" },
    { position: 1, name: "도전", description: "극복해야 할 장애물" },
    { position: 2, name: "과거", description: "영향을 준 과거" },
    { position: 3, name: "미래", description: "가까운 미래" },
    { position: 4, name: "결과", description: "최종 결과" },
  ],
  7: [
    { position: 0, name: "현재", description: "현재 상태" },
    { position: 1, name: "장애물", description: "극복할 것" },
    { position: 2, name: "목표", description: "도달하려는 곳" },
    { position: 3, name: "과거", description: "기초와 뿌리" },
    { position: 4, name: "최근", description: "최근 상황" },
    { position: 5, name: "미래", description: "가까운 미래" },
    { position: 6, name: "결과", description: "최종 결과" },
  ],
  10: [
    { position: 0, name: "현재 상황", description: "현재의 중심" },
    { position: 1, name: "도전", description: "넘어야 할 것" },
    { position: 2, name: "목표", description: "의식적 목표" },
    { position: 3, name: "뿌리", description: "무의식의 기반" },
    { position: 4, name: "과거", description: "지나간 영향" },
    { position: 5, name: "미래", description: "가능한 미래" },
    { position: 6, name: "내면", description: "당신의 태도" },
    { position: 7, name: "외부 영향", description: "주변의 영향" },
    { position: 8, name: "희망과 두려움", description: "깊은 감정" },
    { position: 9, name: "최종 결과", description: "최종 결론" },
  ],
};
