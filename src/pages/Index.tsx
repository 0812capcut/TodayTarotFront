import { useState, useEffect } from "react";
import { QuestionInput } from "@/components/QuestionInput";
import { SpreadSelector } from "@/components/SpreadSelector";
import { SpreadIntro } from "@/components/SpreadIntro";
import { CardSelection } from "@/components/CardSelection";
import { ReadingResult } from "@/components/ReadingResult";
import { SpreadType } from "@/types/tarot";
import { tarotDeck } from "@/data/tarotDeck";
import { getQuestionData } from "@/utils/gptIntegration";

type Step = "question" | "spread-select" | "intro" | "selection" | "result";

const Index = () => {
  const [step, setStep] = useState<Step>("question");
  const [question, setQuestion] = useState("");
  const [spreadType, setSpreadType] = useState<SpreadType>("3");
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [returnUrl, setReturnUrl] = useState<string | null>(null);

  // URL 파라미터 처리 (GPT 연동)
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const sessionId = urlParams.get('session');
      
      if (sessionId) {
        // 세션 ID로 질문 데이터 가져오기
        const questionData = getQuestionData(sessionId);
        if (questionData) {
          console.log('GPT에서 받은 질문:', questionData.question);
          setQuestion(questionData.question);
          setStep("spread-select");
          
          if (questionData.returnUrl) {
            setReturnUrl(questionData.returnUrl);
          }
        } else {
          console.error('세션 데이터를 찾을 수 없습니다:', sessionId);
        }
      }
    } catch (error) {
      console.error('GPT 연동 처리 오류:', error);
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
