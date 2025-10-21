export interface TarotCard {
  id: number;
  name: string;
  nameKo: string;
  imagePath: string;
  meaning: string;
  reversedMeaning: string;
  keywords: string[];
}

export const tarotDeck: TarotCard[] = [
  { id: 0, name: "The Fool", nameKo: "바보", imagePath: "/images/cards/0-fool.jpg", meaning: "새로운 시작, 자유로운 영혼, 순수함", reversedMeaning: "무모함, 경솔함", keywords: ["시작", "모험", "자유"] },
  { id: 1, name: "The Magician", nameKo: "마법사", imagePath: "/images/cards/1-magician.jpg", meaning: "의지와 창조력, 실행력", reversedMeaning: "조작, 속임수", keywords: ["창조", "의지", "능력"] },
  { id: 2, name: "The High Priestess", nameKo: "여사제", imagePath: "/images/cards/2-high-priestess.jpg", meaning: "직관, 신비, 내면의 지혜", reversedMeaning: "비밀, 숨겨진 것", keywords: ["직관", "신비", "지혜"] },
  { id: 3, name: "The Empress", nameKo: "여황제", imagePath: "/images/cards/3-empress.jpg", meaning: "풍요, 창조성, 모성", reversedMeaning: "의존, 과잉보호", keywords: ["풍요", "사랑", "창조"] },
  { id: 4, name: "The Emperor", nameKo: "황제", imagePath: "/images/cards/4-emperor.jpg", meaning: "권위, 안정, 리더십", reversedMeaning: "독재, 경직", keywords: ["권위", "안정", "질서"] },
  { id: 5, name: "The Hierophant", nameKo: "교황", imagePath: "/images/cards/5-hierophant.jpg", meaning: "전통, 가르침, 영적 지도", reversedMeaning: "고정관념, 독단", keywords: ["전통", "가르침", "신념"] },
  { id: 6, name: "The Lovers", nameKo: "연인", imagePath: "/images/cards/6-lovers.jpg", meaning: "사랑, 선택, 조화", reversedMeaning: "불화, 유혹", keywords: ["사랑", "선택", "조화"] },
  { id: 7, name: "The Chariot", nameKo: "전차", imagePath: "/images/cards/7-chariot.jpg", meaning: "승리, 의지력, 추진력", reversedMeaning: "통제 불능, 좌절", keywords: ["승리", "의지", "전진"] },
  { id: 8, name: "Strength", nameKo: "힘", imagePath: "/images/cards/8-strength.jpg", meaning: "용기, 인내, 내면의 힘", reversedMeaning: "자제력 부족, 약함", keywords: ["용기", "인내", "힘"] },
  { id: 9, name: "The Hermit", nameKo: "은둔자", imagePath: "/images/cards/9-hermit.jpg", meaning: "성찰, 고독, 내면 탐구", reversedMeaning: "고립, 외로움", keywords: ["성찰", "지혜", "고독"] },
  { id: 10, name: "Wheel of Fortune", nameKo: "운명의 수레바퀴", imagePath: "/images/cards/10-wheel-of-fortune.jpg", meaning: "변화, 운명, 새로운 기회", reversedMeaning: "불운, 저항", keywords: ["변화", "운명", "순환"] },
  { id: 11, name: "Justice", nameKo: "정의", imagePath: "/images/cards/11-justice.jpg", meaning: "공정함, 균형, 진실", reversedMeaning: "불공정, 편견", keywords: ["정의", "균형", "진실"] },
  { id: 12, name: "The Hanged Man", nameKo: "매달린 사람", imagePath: "/images/cards/12-hanged-man.jpg", meaning: "희생, 새로운 관점, 정지", reversedMeaning: "지연, 무의미한 희생", keywords: ["희생", "관점", "정지"] },
  { id: 13, name: "Death", nameKo: "죽음", imagePath: "/images/cards/13-death.jpg", meaning: "변화, 종말과 시작, 변신", reversedMeaning: "저항, 정체", keywords: ["변화", "종말", "재탄생"] },
  { id: 14, name: "Temperance", nameKo: "절제", imagePath: "/images/cards/14-temperance.jpg", meaning: "조화, 균형, 중용", reversedMeaning: "불균형, 과잉", keywords: ["조화", "균형", "절제"] },
  { id: 15, name: "The Devil", nameKo: "악마", imagePath: "/images/cards/15-devil.jpg", meaning: "유혹, 집착, 물질적 욕망", reversedMeaning: "해방, 자유", keywords: ["유혹", "집착", "욕망"] },
  { id: 16, name: "The Tower", nameKo: "탑", imagePath: "/images/cards/16-tower.jpg", meaning: "파괴, 갑작스런 변화, 계시", reversedMeaning: "재난 회피, 지연", keywords: ["파괴", "변화", "계시"] },
  { id: 17, name: "The Star", nameKo: "별", imagePath: "/images/cards/17-star.jpg", meaning: "희망, 영감, 평온", reversedMeaning: "절망, 좌절", keywords: ["희망", "영감", "치유"] },
  { id: 18, name: "The Moon", nameKo: "달", imagePath: "/images/cards/18-moon.jpg", meaning: "환상, 불안, 직관", reversedMeaning: "혼란, 착각", keywords: ["환상", "직관", "불안"] },
  { id: 19, name: "The Sun", nameKo: "태양", imagePath: "/images/cards/19-sun.jpg", meaning: "성공, 기쁨, 활력", reversedMeaning: "지연된 성공, 과신", keywords: ["성공", "기쁨", "활력"] },
  { id: 20, name: "Judgement", nameKo: "심판", imagePath: "/images/cards/20-judgement.jpg", meaning: "부활, 새로운 시작, 평가", reversedMeaning: "자기 의심, 회피", keywords: ["부활", "평가", "결정"] },
  { id: 21, name: "The World", nameKo: "세계", imagePath: "/images/cards/21-world.jpg", meaning: "완성, 성취, 통합", reversedMeaning: "미완성, 지연", keywords: ["완성", "성취", "통합"] },
  
  // Minor Arcana - Wands (지팡이)
  { id: 22, name: "Ace of Wands", nameKo: "지팡이 에이스", imagePath: "/images/cards/22-ace-of-wands.jpg", meaning: "새로운 열정, 창조적 에너지", reversedMeaning: "지연, 좌절", keywords: ["열정", "시작", "창조"] },
  { id: 23, name: "Two of Wands", nameKo: "지팡이 2", imagePath: "/images/cards/23-two-of-wands.jpg", meaning: "계획, 미래 전망", reversedMeaning: "두려움, 결정 불가", keywords: ["계획", "선택", "미래"] },
  { id: 24, name: "Three of Wands", nameKo: "지팡이 3", imagePath: "/images/cards/24-three-of-wands.jpg", meaning: "확장, 진전, 기대", reversedMeaning: "장애물, 지연", keywords: ["확장", "진전", "기회"] },
  { id: 25, name: "Four of Wands", nameKo: "지팡이 4", imagePath: "/images/cards/25-four-of-wands.jpg", meaning: "축하, 안정, 조화", reversedMeaning: "불안정, 부조화", keywords: ["축하", "안정", "기쁨"] },
  { id: 26, name: "Five of Wands", nameKo: "지팡이 5", imagePath: "/images/cards/26-five-of-wands.jpg", meaning: "경쟁, 갈등, 도전", reversedMeaning: "회피, 내적 갈등", keywords: ["경쟁", "갈등", "도전"] },
  { id: 27, name: "Six of Wands", nameKo: "지팡이 6", imagePath: "/images/cards/27-six-of-wands.jpg", meaning: "승리, 인정, 성공", reversedMeaning: "자만, 실패", keywords: ["승리", "인정", "성공"] },
  { id: 28, name: "Seven of Wands", nameKo: "지팡이 7", imagePath: "/images/cards/28-seven-of-wands.jpg", meaning: "방어, 용기, 도전", reversedMeaning: "압도됨, 포기", keywords: ["방어", "용기", "도전"] },
  { id: 29, name: "Eight of Wands", nameKo: "지팡이 8", imagePath: "/images/cards/29-eight-of-wands.jpg", meaning: "빠른 진행, 행동", reversedMeaning: "지연, 서두름", keywords: ["속도", "행동", "진행"] },
  { id: 30, name: "Nine of Wands", nameKo: "지팡이 9", imagePath: "/images/cards/30-nine-of-wands.jpg", meaning: "인내, 지속, 경계", reversedMeaning: "탈진, 포기", keywords: ["인내", "지속", "경계"] },
  { id: 31, name: "Ten of Wands", nameKo: "지팡이 10", imagePath: "/images/cards/31-ten-of-wands.jpg", meaning: "부담, 책임, 과중", reversedMeaning: "해방, 위임", keywords: ["부담", "책임", "노력"] },
  { id: 32, name: "Page of Wands", nameKo: "지팡이 시종", imagePath: "/images/cards/32-page-of-wands.jpg", meaning: "열정, 모험, 새로운 시작", reversedMeaning: "무모함, 지연", keywords: ["열정", "모험", "시작"] },
  { id: 33, name: "Knight of Wands", nameKo: "지팡이 기사", imagePath: "/images/cards/33-knight-of-wands.jpg", meaning: "행동, 모험, 열정", reversedMeaning: "성급함, 무모함", keywords: ["행동", "모험", "열정"] },
  { id: 34, name: "Queen of Wands", nameKo: "지팡이 여왕", imagePath: "/images/cards/34-queen-of-wands.jpg", meaning: "자신감, 창조성, 리더십", reversedMeaning: "자만, 독선", keywords: ["자신감", "창조", "리더십"] },
  { id: 35, name: "King of Wands", nameKo: "지팡이 왕", imagePath: "/images/cards/35-king-of-wands.jpg", meaning: "리더십, 창조성, 비전", reversedMeaning: "독재, 성급함", keywords: ["리더십", "창조", "비전"] },
  
  // Minor Arcana - Cups (컵)
  { id: 36, name: "Ace of Cups", nameKo: "컵 에이스", imagePath: "/images/cards/36-ace-of-cups.jpg", meaning: "새로운 감정, 사랑, 영감", reversedMeaning: "감정적 혼란, 거부", keywords: ["감정", "사랑", "영감"] },
  { id: 37, name: "Two of Cups", nameKo: "컵 2", imagePath: "/images/cards/37-two-of-cups.jpg", meaning: "연결, 조화, 파트너십", reversedMeaning: "불화, 갈등", keywords: ["연결", "조화", "파트너십"] },
  { id: 38, name: "Three of Cups", nameKo: "컵 3", imagePath: "/images/cards/38-three-of-cups.jpg", meaning: "축하, 우정, 기쁨", reversedMeaning: "고립, 배신", keywords: ["축하", "우정", "기쁨"] },
  { id: 39, name: "Four of Cups", nameKo: "컵 4", imagePath: "/images/cards/39-four-of-cups.jpg", meaning: "불만, 기회 놓침, 성찰", reversedMeaning: "새로운 기회, 감사", keywords: ["불만", "기회", "성찰"] },
  { id: 40, name: "Five of Cups", nameKo: "컵 5", imagePath: "/images/cards/40-five-of-cups.jpg", meaning: "실망, 상실, 후회", reversedMeaning: "치유, 용서", keywords: ["실망", "상실", "후회"] },
  { id: 41, name: "Six of Cups", nameKo: "컵 6", imagePath: "/images/cards/41-six-of-cups.jpg", meaning: "추억, 순수함, 과거", reversedMeaning: "현재에 집중", keywords: ["추억", "순수", "과거"] },
  { id: 42, name: "Seven of Cups", nameKo: "컵 7", imagePath: "/images/cards/42-seven-of-cups.jpg", meaning: "선택, 환상, 꿈", reversedMeaning: "결정, 현실", keywords: ["선택", "환상", "꿈"] },
  { id: 43, name: "Eight of Cups", nameKo: "컵 8", imagePath: "/images/cards/43-eight-of-cups.jpg", meaning: "포기, 새로운 시작", reversedMeaning: "지속, 회피", keywords: ["포기", "새시작", "이동"] },
  { id: 44, name: "Nine of Cups", nameKo: "컵 9", imagePath: "/images/cards/44-nine-of-cups.jpg", meaning: "만족, 성취, 기쁨", reversedMeaning: "불만족, 탐욕", keywords: ["만족", "성취", "기쁨"] },
  { id: 45, name: "Ten of Cups", nameKo: "컵 10", imagePath: "/images/cards/45-ten-of-cups.jpg", meaning: "완성, 가족, 조화", reversedMeaning: "불화, 갈등", keywords: ["완성", "가족", "조화"] },
  { id: 46, name: "Page of Cups", nameKo: "컵 시종", imagePath: "/images/cards/46-page-of-cups.jpg", meaning: "직관, 감정, 창조성", reversedMeaning: "감정적 불안정", keywords: ["직관", "감정", "창조"] },
  { id: 47, name: "Knight of Cups", nameKo: "컵 기사", imagePath: "/images/cards/47-knight-of-cups.jpg", meaning: "로맨스, 이상주의, 감정", reversedMeaning: "환상, 기만", keywords: ["로맨스", "이상", "감정"] },
  { id: 48, name: "Queen of Cups", nameKo: "컵 여왕", imagePath: "/images/cards/48-queen-of-cups.jpg", meaning: "직관, 감정, 치유", reversedMeaning: "감정적 조작", keywords: ["직관", "감정", "치유"] },
  { id: 49, name: "King of Cups", nameKo: "컵 왕", imagePath: "/images/cards/49-king-of-cups.jpg", meaning: "감정적 균형, 지혜", reversedMeaning: "감정적 불안정", keywords: ["균형", "지혜", "감정"] },
  
  // Minor Arcana - Swords (검)
  { id: 50, name: "Ace of Swords", nameKo: "검 에이스", imagePath: "/images/cards/50-ace-of-swords.jpg", meaning: "새로운 아이디어, 진실", reversedMeaning: "혼란, 거짓", keywords: ["아이디어", "진실", "명확"] },
  { id: 51, name: "Two of Swords", nameKo: "검 2", imagePath: "/images/cards/51-two-of-swords.jpg", meaning: "어려운 선택, 갈등", reversedMeaning: "결정, 명확함", keywords: ["선택", "갈등", "균형"] },
  { id: 52, name: "Three of Swords", nameKo: "검 3", imagePath: "/images/cards/52-three-of-swords.jpg", meaning: "상처, 배신, 고통", reversedMeaning: "치유, 용서", keywords: ["상처", "배신", "고통"] },
  { id: 53, name: "Four of Swords", nameKo: "검 4", imagePath: "/images/cards/53-four-of-swords.jpg", meaning: "휴식, 성찰, 평화", reversedMeaning: "불안, 활동", keywords: ["휴식", "성찰", "평화"] },
  { id: 54, name: "Five of Swords", nameKo: "검 5", imagePath: "/images/cards/54-five-of-swords.jpg", meaning: "갈등, 패배, 배신", reversedMeaning: "화해, 협력", keywords: ["갈등", "패배", "배신"] },
  { id: 55, name: "Six of Swords", nameKo: "검 6", imagePath: "/images/cards/55-six-of-swords.jpg", meaning: "변화, 이동, 전환", reversedMeaning: "정체, 저항", keywords: ["변화", "이동", "전환"] },
  { id: 56, name: "Seven of Swords", nameKo: "검 7", imagePath: "/images/cards/56-seven-of-swords.jpg", meaning: "속임수, 도둑질, 회피", reversedMeaning: "진실, 정직", keywords: ["속임", "도둑", "회피"] },
  { id: 57, name: "Eight of Swords", nameKo: "검 8", imagePath: "/images/cards/57-eight-of-swords.jpg", meaning: "제약, 포로, 무력감", reversedMeaning: "자유, 해방", keywords: ["제약", "포로", "무력"] },
  { id: 58, name: "Nine of Swords", nameKo: "검 9", imagePath: "/images/cards/58-nine-of-swords.jpg", meaning: "불안, 악몽, 걱정", reversedMeaning: "평화, 안정", keywords: ["불안", "악몽", "걱정"] },
  { id: 59, name: "Ten of Swords", nameKo: "검 10", imagePath: "/images/cards/59-ten-of-swords.jpg", meaning: "배신, 끝, 파괴", reversedMeaning: "회복, 새로운 시작", keywords: ["배신", "끝", "파괴"] },
  { id: 60, name: "Page of Swords", nameKo: "검 시종", imagePath: "/images/cards/60-page-of-swords.jpg", meaning: "호기심, 새로운 아이디어", reversedMeaning: "성급함, 혼란", keywords: ["호기심", "아이디어", "학습"] },
  { id: 61, name: "Knight of Swords", nameKo: "검 기사", imagePath: "/images/cards/61-knight-of-swords.jpg", meaning: "행동, 결단력, 용기", reversedMeaning: "성급함, 무모함", keywords: ["행동", "결단", "용기"] },
  { id: 62, name: "Queen of Swords", nameKo: "검 여왕", imagePath: "/images/cards/62-queen-of-swords.jpg", meaning: "명확함, 진실, 독립", reversedMeaning: "냉정함, 비판", keywords: ["명확", "진실", "독립"] },
  { id: 63, name: "King of Swords", nameKo: "검 왕", imagePath: "/images/cards/63-king-of-swords.jpg", meaning: "진실, 정의, 지혜", reversedMeaning: "독재, 냉정", keywords: ["진실", "정의", "지혜"] },
  
  // Minor Arcana - Pentacles (동전)
  { id: 64, name: "Ace of Pentacles", nameKo: "동전 에이스", imagePath: "/images/cards/64-ace-of-pentacles.jpg", meaning: "새로운 기회, 물질적 성공", reversedMeaning: "기회 놓침, 낭비", keywords: ["기회", "성공", "물질"] },
  { id: 65, name: "Two of Pentacles", nameKo: "동전 2", imagePath: "/images/cards/65-two-of-pentacles.jpg", meaning: "균형, 우선순위", reversedMeaning: "불균형, 혼란", keywords: ["균형", "우선순위", "조화"] },
  { id: 66, name: "Three of Pentacles", nameKo: "동전 3", imagePath: "/images/cards/66-three-of-pentacles.jpg", meaning: "협력, 기술, 팀워크", reversedMeaning: "불협조, 독선", keywords: ["협력", "기술", "팀워크"] },
  { id: 67, name: "Four of Pentacles", nameKo: "동전 4", imagePath: "/images/cards/67-four-of-pentacles.jpg", meaning: "안정, 보수, 통제", reversedMeaning: "낭비, 통제 상실", keywords: ["안정", "보수", "통제"] },
  { id: 68, name: "Five of Pentacles", nameKo: "동전 5", imagePath: "/images/cards/68-five-of-pentacles.jpg", meaning: "재정적 어려움, 고립", reversedMeaning: "회복, 도움", keywords: ["어려움", "고립", "재정"] },
  { id: 69, name: "Six of Pentacles", nameKo: "동전 6", imagePath: "/images/cards/69-six-of-pentacles.jpg", meaning: "나눔, 자선, 균형", reversedMeaning: "불균형, 탐욕", keywords: ["나눔", "자선", "균형"] },
  { id: 70, name: "Seven of Pentacles", nameKo: "동전 7", imagePath: "/images/cards/70-seven-of-pentacles.jpg", meaning: "인내, 투자, 장기적 계획", reversedMeaning: "성급함, 좌절", keywords: ["인내", "투자", "계획"] },
  { id: 71, name: "Eight of Pentacles", nameKo: "동전 8", imagePath: "/images/cards/71-eight-of-pentacles.jpg", meaning: "기술, 노력, 숙련", reversedMeaning: "게으름, 품질 저하", keywords: ["기술", "노력", "숙련"] },
  { id: 72, name: "Nine of Pentacles", nameKo: "동전 9", imagePath: "/images/cards/72-nine-of-pentacles.jpg", meaning: "독립, 성공, 안정", reversedMeaning: "의존, 불안정", keywords: ["독립", "성공", "안정"] },
  { id: 73, name: "Ten of Pentacles", nameKo: "동전 10", imagePath: "/images/cards/73-ten-of-pentacles.jpg", meaning: "부, 가족, 전통", reversedMeaning: "재정적 손실, 갈등", keywords: ["부", "가족", "전통"] },
  { id: 74, name: "Page of Pentacles", nameKo: "동전 시종", imagePath: "/images/cards/74-page-of-pentacles.jpg", meaning: "학습, 새로운 기회", reversedMeaning: "게으름, 낭비", keywords: ["학습", "기회", "성장"] },
  { id: 75, name: "Knight of Pentacles", nameKo: "동전 기사", imagePath: "/images/cards/75-knight-of-pentacles.jpg", meaning: "근면, 안정, 신뢰", reversedMeaning: "게으름, 무기력", keywords: ["근면", "안정", "신뢰"] },
  { id: 76, name: "Queen of Pentacles", nameKo: "동전 여왕", imagePath: "/images/cards/76-queen-of-pentacles.jpg", meaning: "풍요, 실용성, 모성", reversedMeaning: "낭비, 의존", keywords: ["풍요", "실용", "모성"] },
  { id: 77, name: "King of Pentacles", nameKo: "동전 왕", imagePath: "/images/cards/77-king-of-pentacles.jpg", meaning: "부, 안정, 리더십", reversedMeaning: "탐욕, 불안정", keywords: ["부", "안정", "리더십"] },
];
