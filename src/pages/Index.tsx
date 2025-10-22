import { useState, useEffect } from "react";
import { QuestionInput } from "@/components/QuestionInput";
import { SpreadSelector } from "@/components/SpreadSelector";
import { SpreadIntro } from "@/components/SpreadIntro";
import { CardSelection } from "@/components/CardSelection";
import { ReadingResult } from "@/components/ReadingResult";
import { SpreadType } from "@/types/tarot";
import { tarotDeck } from "@/data/tarotDeck";

type Step = "question" | "spread-select" | "intro" | "selection" | "result";

const Index = () => {
  const [step, setStep] = useState<Step>("question");
  const [question, setQuestion] = useState("");
  const [spreadType, setSpreadType] = useState<SpreadType>("3");
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [returnUrl, setReturnUrl] = useState<string | null>(null);

  // URL 파라미터 처리 (GPT 연동)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const questionParam = urlParams.get('q');
    const returnUrlParam = urlParams.get('return_url');
    
    if (questionParam) {
      try {
        // GPT에서 온 경우: 질문 자동 입력하고 배열 선택 단계로 이동
        // URLSearchParams는 이미 자동으로 디코딩하므로 추가 디코딩 불필요
        setQuestion(questionParam);
        setStep("spread-select");
        
        if (returnUrlParam) {
          setReturnUrl(returnUrlParam);
        }
      } catch (error) {
        console.error('URL 파라미터 처리 오류:', error);
        // 오류 발생 시 원본 사용
        setQuestion(questionParam);
        setStep("spread-select");
      }
    }
  }, []);

  const handleQuestionSubmit = (q: string) => {
    setQuestion(q);
    setStep("spread-select");
  };

  const handleSpreadSelect = (selectedSpreadType: SpreadType) => {
    setSpreadType(selectedSpreadType);
    setStep("intro");
  };

  const handleSpreadStart = () => {
    setStep("selection");
  };

  const handleCardsSelected = (cards: number[]) => {
    setSelectedCards(cards);
    setStep("result");
  };

  const handleReset = () => {
    setStep("question");
    setQuestion("");
    setSelectedCards([]);
  };

  return (
    <>
      {step === "question" && <QuestionInput onSubmit={handleQuestionSubmit} />}
      
      {step === "spread-select" && (
        <SpreadSelector
          question={question}
          onSelect={handleSpreadSelect}
          onBack={handleReset}
        />
      )}
      
      {step === "intro" && (
        <SpreadIntro
          spreadType={spreadType}
          question={question}
          onStart={handleSpreadStart}
          onBack={handleReset}
        />
      )}
      
      {step === "selection" && (
        <CardSelection
          spreadType={spreadType}
          totalCards={tarotDeck.length}
          onComplete={handleCardsSelected}
        />
      )}
      
      {step === "result" && (
        <ReadingResult
          spreadType={spreadType}
          selectedCards={selectedCards}
          question={question}
          onReset={handleReset}
          returnUrl={returnUrl}
        />
      )}
    </>
  );
};

export default Index;
