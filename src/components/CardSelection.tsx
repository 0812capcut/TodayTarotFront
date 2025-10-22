import { useState, useEffect } from "react";
import { SpreadType } from "@/types/tarot";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { Sparkles } from "lucide-react";

interface CardSelectionProps {
  spreadType: SpreadType;
  totalCards: number;
  onComplete: (selectedCards: number[]) => void;
}

export function CardSelection({ spreadType, totalCards, onComplete }: CardSelectionProps) {
  const [shuffledCards, setShuffledCards] = useState<number[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [isFlipping, setIsFlipping] = useState<number | null>(null);
  const [showInstruction, setShowInstruction] = useState(true);

  useEffect(() => {
    // 카드 섞기
    const cards = Array.from({ length: totalCards }, (_, i) => i);
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
  }, [totalCards]);

  const handleCardClick = (cardId: number) => {
    const requiredCards = parseInt(spreadType.toString());
    if (selectedCards.length >= requiredCards || isFlipping !== null) return;

    setIsFlipping(cardId);
    
    setTimeout(() => {
      const newSelected = [...selectedCards, cardId];
      setSelectedCards(newSelected);
      setIsFlipping(null);

      if (newSelected.length === requiredCards) {
        setTimeout(() => {
          onComplete(newSelected);
        }, 600);
      }
    }, 600);
  };

  const isSelected = (cardId: number) => selectedCards.includes(cardId);
  const isCurrentlyFlipping = (cardId: number) => isFlipping === cardId;

  return (
    <>
      {/* 안내 메시지 팝업 */}
      <Dialog open={showInstruction} onOpenChange={setShowInstruction}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader className="text-center">
            <VisuallyHidden>
              <DialogTitle>카드 선택 안내</DialogTitle>
            </VisuallyHidden>
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-12 h-12 text-accent animate-glow-pulse" />
            </div>
            <DialogDescription className="text-lg text-muted-foreground mt-4">
              질문을 마음속에 떠올리며<br />
              신중히 카드를 뽑으세요
            </DialogDescription>
          </DialogHeader>
          <div className="text-center mt-6">
            <Button
              onClick={() => setShowInstruction(false)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow"
              size="lg"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              카드 뽑기 시작
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* 카드 선택 화면 */}
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
                disabled={isSelected(cardId) || isFlipping !== null || showInstruction}
                className={cn(
                  "aspect-[2/3] rounded-xl transition-all duration-300",
                  "hover:scale-105 hover:shadow-glow",
                  isSelected(cardId) && "opacity-0 pointer-events-none",
                  isCurrentlyFlipping(cardId) && "animate-flip",
                  showInstruction && "opacity-50 pointer-events-none"
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
                  {/* 카드 뒷면 이미지 */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('/images/cards/card_back.png')`
                    }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
