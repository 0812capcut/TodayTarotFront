export interface TarotCard {
  id: number;
  name: string;
  nameKo: string;
  meaning: string;
  reversedMeaning: string;
  keywords: string[];
}

export const tarotDeck: TarotCard[] = [
  { id: 0, name: "The Fool", nameKo: "바보", meaning: "새로운 시작, 자유로운 영혼, 순수함", reversedMeaning: "무모함, 경솔함", keywords: ["시작", "모험", "자유"] },
  { id: 1, name: "The Magician", nameKo: "마법사", meaning: "의지와 창조력, 실행력", reversedMeaning: "조작, 속임수", keywords: ["창조", "의지", "능력"] },
  { id: 2, name: "The High Priestess", nameKo: "여사제", meaning: "직관, 신비, 내면의 지혜", reversedMeaning: "비밀, 숨겨진 것", keywords: ["직관", "신비", "지혜"] },
  { id: 3, name: "The Empress", nameKo: "여황제", meaning: "풍요, 창조성, 모성", reversedMeaning: "의존, 과잉보호", keywords: ["풍요", "사랑", "창조"] },
  { id: 4, name: "The Emperor", nameKo: "황제", meaning: "권위, 안정, 리더십", reversedMeaning: "독재, 경직", keywords: ["권위", "안정", "질서"] },
  { id: 5, name: "The Hierophant", nameKo: "교황", meaning: "전통, 가르침, 영적 지도", reversedMeaning: "고정관념, 독단", keywords: ["전통", "가르침", "신념"] },
  { id: 6, name: "The Lovers", nameKo: "연인", meaning: "사랑, 선택, 조화", reversedMeaning: "불화, 유혹", keywords: ["사랑", "선택", "조화"] },
  { id: 7, name: "The Chariot", nameKo: "전차", meaning: "승리, 의지력, 추진력", reversedMeaning: "통제 불능, 좌절", keywords: ["승리", "의지", "전진"] },
  { id: 8, name: "Strength", nameKo: "힘", meaning: "용기, 인내, 내면의 힘", reversedMeaning: "자제력 부족, 약함", keywords: ["용기", "인내", "힘"] },
  { id: 9, name: "The Hermit", nameKo: "은둔자", meaning: "성찰, 고독, 내면 탐구", reversedMeaning: "고립, 외로움", keywords: ["성찰", "지혜", "고독"] },
  { id: 10, name: "Wheel of Fortune", nameKo: "운명의 수레바퀴", meaning: "변화, 운명, 새로운 기회", reversedMeaning: "불운, 저항", keywords: ["변화", "운명", "순환"] },
  { id: 11, name: "Justice", nameKo: "정의", meaning: "공정함, 균형, 진실", reversedMeaning: "불공정, 편견", keywords: ["정의", "균형", "진실"] },
  { id: 12, name: "The Hanged Man", nameKo: "매달린 사람", meaning: "희생, 새로운 관점, 정지", reversedMeaning: "지연, 무의미한 희생", keywords: ["희생", "관점", "정지"] },
  { id: 13, name: "Death", nameKo: "죽음", meaning: "변화, 종말과 시작, 변신", reversedMeaning: "저항, 정체", keywords: ["변화", "종말", "재탄생"] },
  { id: 14, name: "Temperance", nameKo: "절제", meaning: "조화, 균형, 중용", reversedMeaning: "불균형, 과잉", keywords: ["조화", "균형", "절제"] },
  { id: 15, name: "The Devil", nameKo: "악마", meaning: "유혹, 집착, 물질적 욕망", reversedMeaning: "해방, 자유", keywords: ["유혹", "집착", "욕망"] },
  { id: 16, name: "The Tower", nameKo: "탑", meaning: "파괴, 갑작스런 변화, 계시", reversedMeaning: "재난 회피, 지연", keywords: ["파괴", "변화", "계시"] },
  { id: 17, name: "The Star", nameKo: "별", meaning: "희망, 영감, 평온", reversedMeaning: "절망, 좌절", keywords: ["희망", "영감", "치유"] },
  { id: 18, name: "The Moon", nameKo: "달", meaning: "환상, 불안, 직관", reversedMeaning: "혼란, 착각", keywords: ["환상", "직관", "불안"] },
  { id: 19, name: "The Sun", nameKo: "태양", meaning: "성공, 기쁨, 활력", reversedMeaning: "지연된 성공, 과신", keywords: ["성공", "기쁨", "활력"] },
  { id: 20, name: "Judgement", nameKo: "심판", meaning: "부활, 새로운 시작, 평가", reversedMeaning: "자기 의심, 회피", keywords: ["부활", "평가", "결정"] },
  { id: 21, name: "The World", nameKo: "세계", meaning: "완성, 성취, 통합", reversedMeaning: "미완성, 지연", keywords: ["완성", "성취", "통합"] },
  
  // Minor Arcana - Wands (지팡이)
  { id: 22, name: "Ace of Wands", nameKo: "지팡이 에이스", meaning: "새로운 열정, 창조적 에너지", reversedMeaning: "지연, 좌절", keywords: ["열정", "시작", "창조"] },
  { id: 23, name: "Two of Wands", nameKo: "지팡이 2", meaning: "계획, 미래 전망", reversedMeaning: "두려움, 결정 불가", keywords: ["계획", "선택", "미래"] },
  { id: 24, name: "Three of Wands", nameKo: "지팡이 3", meaning: "확장, 진전, 기대", reversedMeaning: "장애물, 지연", keywords: ["확장", "진전", "기회"] },
  { id: 25, name: "Four of Wands", nameKo: "지팡이 4", meaning: "축하, 안정, 조화", reversedMeaning: "불안정, 부조화", keywords: ["축하", "안정", "기쁨"] },
  { id: 26, name: "Five of Wands", nameKo: "지팡이 5", meaning: "경쟁, 갈등, 도전", reversedMeaning: "회피, 내적 갈등", keywords: ["경쟁", "갈등", "도전"] },
  { id: 27, name: "Six of Wands", nameKo: "지팡이 6", meaning: "승리, 인정, 성공", reversedMeaning: "자만, 실패", keywords: ["승리", "인정", "성공"] },
  { id: 28, name: "Seven of Wands", nameKo: "지팡이 7", meaning: "방어, 용기, 도전", reversedMeaning: "압도됨, 포기", keywords: ["방어", "용기", "도전"] },
  { id: 29, name: "Eight of Wands", nameKo: "지팡이 8", meaning: "빠른 진행, 행동", reversedMeaning: "지연, 서두름", keywords: ["속도", "행동", "진행"] },
  { id: 30, name: "Nine of Wands", nameKo: "지팡이 9", meaning: "인내, 지속, 경계", reversedMeaning: "탈진, 포기", keywords: ["인내", "지속", "경계"] },
  { id: 31, name: "Ten of Wands", nameKo: "지팡이 10", meaning: "부담, 책임, 과중", reversedMeaning: "해방, 위임", keywords: ["부담", "책임", "노력"] },
];
