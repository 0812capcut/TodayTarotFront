import { useState, useEffect } from "react";
import { SpreadType } from "@/types/tarot";
import { cn } from "@/lib/utils";

interface CardSelectionProps {
  spreadType: SpreadType;
  totalCards: number;
  onComplete: (selectedCards: number[]) => void;
}

export function CardSelection({ spreadType, totalCards, onComplete }: CardSelectionProps) {
  const [shuffledCards, setShuffledCards] = useState<number[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [isFlipping, setIsFlipping] = useState<number | null>(null);

  useEffect(() => {
    // 카드 섞기
    const cards = Array.from({ length: totalCards }, (_, i) => i);
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
  }, [totalCards]);

  const handleCardClick = (cardId: number) => {
    if (selectedCards.length >= spreadType || isFlipping !== null) return;

    setIsFlipping(cardId);
    
    setTimeout(() => {
      const newSelected = [...selectedCards, cardId];
      setSelectedCards(newSelected);
      setIsFlipping(null);

      if (newSelected.length === spreadType) {
        setTimeout(() => {
          onComplete(newSelected);
        }, 600);
      }
    }, 600);
  };

  const isSelected = (cardId: number) => selectedCards.includes(cardId);
  const isCurrentlyFlipping = (cardId: number) => isFlipping === cardId;

  return (
    <div className="min-h-screen bg-gradient-mystic p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-2 text-foreground">
            카드를 {spreadType}장 선택해주세요
          </h2>
          <p className="text-muted-foreground">
            선택된 카드: {selectedCards.length} / {spreadType}
          </p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {shuffledCards.map((cardId, index) => (
            <button
              key={cardId}
              onClick={() => handleCardClick(cardId)}
              disabled={isSelected(cardId) || isFlipping !== null}
              className={cn(
                "aspect-[2/3] rounded-xl transition-all duration-300",
                "hover:scale-105 hover:shadow-glow",
                isSelected(cardId) && "opacity-0 pointer-events-none",
                isCurrentlyFlipping(cardId) && "animate-flip"
              )}
              style={{
                animationDelay: `${index * 30}ms`,
              }}
            >
              <div
                className={cn(
                  "w-full h-full rounded-xl border-2 border-accent/30",
                  "bg-gradient-card shadow-card",
                  "flex items-center justify-center",
                  "relative overflow-hidden"
                )}
              >
                {/* 카드 뒷면 패턴 */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary">
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
                    }}
                  />
                </div>
                <div className="relative text-4xl text-accent">✦</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
