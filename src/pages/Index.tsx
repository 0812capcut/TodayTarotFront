import { useState } from "react";
import { QuestionInput } from "@/components/QuestionInput";
import { SpreadIntro } from "@/components/SpreadIntro";
import { CardSelection } from "@/components/CardSelection";
import { ReadingResult } from "@/components/ReadingResult";
import { recommendSpread } from "@/utils/spreadRecommender";
import { SpreadType } from "@/types/tarot";
import { tarotDeck } from "@/data/tarotDeck";

type Step = "question" | "intro" | "selection" | "result";

const Index = () => {
  const [step, setStep] = useState<Step>("question");
  const [question, setQuestion] = useState("");
  const [spreadType, setSpreadType] = useState<SpreadType>("3");
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const handleQuestionSubmit = async (q: string) => {
    setQuestion(q);
    const recommended = await recommendSpread(q);
    setSpreadType(recommended);
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
        />
      )}
    </>
  );
};

export default Index;
