import { Button } from "@/components/ui/button";
import { SpreadType } from "@/types/tarot";
import { tarotDeck } from "@/data/tarotDeck";
import { getSpreadPositions } from "@/utils/dataLoader";
import { RotateCcw, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

interface ReadingResultProps {
  spreadType: SpreadType;
  selectedCards: number[];
  question: string;
  onReset: () => void;
}

export function ReadingResult({ spreadType, selectedCards, question, onReset }: ReadingResultProps) {
  const [positions, setPositions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPositions = async () => {
      try {
        setIsLoading(true);
        const positionsData = await getSpreadPositions(spreadType);
        setPositions(positionsData);
      } catch (error) {
        console.error('Failed to load positions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPositions();
  }, [spreadType]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-mystic flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">결과를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-mystic p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-10 h-10 text-accent animate-float" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            타로 해석
          </h2>
          <div className="bg-card/50 p-6 rounded-xl max-w-2xl mx-auto border border-border">
            <p className="text-sm text-muted-foreground mb-2">당신의 질문:</p>
            <p className="text-foreground font-medium italic">"{question}"</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {selectedCards.map((cardId, index) => {
            const card = tarotDeck.find((c) => c.id === cardId);
            const position = positions[index];
            
            if (!card || !position) return null;

            return (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-card border border-border animate-fade-in hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-sm font-semibold text-accent uppercase">
                      {position.name}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">
                    {position.description}
                  </p>
                </div>

                <div className="aspect-[2/3] rounded-xl bg-gradient-card border-2 border-accent/30 mb-4 flex items-center justify-center shadow-card">
                  <div className="text-center p-4">
                    <div className="text-5xl mb-4 animate-float">✦</div>
                    <h4 className="text-lg font-bold text-foreground mb-1">
                      {card.nameKo}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {card.name}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-1">
                      의미:
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      {card.meaning}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {card.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-secondary rounded-full text-xs text-foreground border border-border"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={onReset}
            variant="outline"
            size="lg"
            className="bg-secondary hover:bg-secondary/80 border-border"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            새로운 질문하기
          </Button>
        </div>
      </div>
    </div>
  );
}
