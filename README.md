# TodayTarotFront - 당신을 위한 타로

React + TypeScript 기반의 인터랙티브 타로카드 리딩 웹 애플리케이션입니다.

## ✨ 주요 기능

### 🎴 다양한 스프레드
- **기본 스프레드**: 2장, 3장, 5장, 7장, 10장 배열법
- **투자 스프레드**: 데일리 인베스트, 리스크 밸런스, 타이밍 분석
- **사랑 스프레드**: 연애 궁합, 관계 치유
- **진로 스프레드**: 진로 결정, 면접 성공
- **건강 스프레드**: 건강 분석, 정신 치유
- **창작 스프레드**: 창작 영감, 예술가 진로
- **학습 스프레드**: 학습 가이드, 시험 성공

### 🤖 스마트 질문 분석
- 질문 내용을 자동으로 분석하여 최적의 스프레드 추천
- JSON 기반 설정으로 새로운 스프레드 쉽게 추가 가능

### 🎨 아름다운 UI/UX
- 신비로운 보라/금색 테마
- 부드러운 애니메이션 효과
- 반응형 디자인
- 직관적인 사용자 인터페이스

## 🚀 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

## 🛠️ 기술 스택

- **Frontend**: React 18, TypeScript, Vite
- **UI**: shadcn/ui, Radix UI, Tailwind CSS
- **상태 관리**: React Query, React Router
- **개발 도구**: ESLint, TypeScript

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── ui/             # shadcn/ui 컴포넌트
│   ├── CardSelection.tsx
│   ├── QuestionInput.tsx
│   ├── ReadingResult.tsx
│   └── SpreadIntro.tsx
├── data/               # JSON 데이터
│   ├── spreads.json    # 스프레드 정보
│   ├── questionPatterns.json
│   └── tarotDeck.ts    # 타로 카드 데이터
├── hooks/              # 커스텀 훅
├── lib/                # 유틸리티
├── pages/              # 페이지 컴포넌트
├── types/              # TypeScript 타입 정의
└── utils/              # 유틸리티 함수
```

## 🎯 사용법

1. **질문 입력**: 궁금한 내용을 자유롭게 입력
2. **스프레드 선택**: 질문에 따라 자동으로 추천된 스프레드 확인
3. **카드 선택**: 안내에 따라 신중히 카드 선택
4. **해석 확인**: 선택된 카드의 상세한 의미와 해석 확인

## 🔧 스프레드 추가

새로운 스프레드를 추가하려면:

1. `src/data/spreads.json`에 스프레드 정보 추가
2. `src/data/questionPatterns.json`에 질문 패턴 추가
3. 코드 수정 없이 자동으로 적용됨!

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

버그 리포트나 기능 제안은 언제든 환영합니다!

---

**Tarot by You** - 당신의 질문에 타로가 답합니다 ✨