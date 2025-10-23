import { Button } from "@/components/ui/button";
import { SpreadType } from "@/types/tarot";
import { getSpreadDescription, getSpreadPositions } from "@/utils/dataLoader";
import { HandHeart, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

interface SpreadIntroProps {
  spreadType: SpreadType;
  question: string;
  onStart: () => void;
  onBack: () => void;
}

export function SpreadIntro({ spreadType, question, onStart, onBack }: SpreadIntroProps) {
  const [positions, setPositions] = useState<any[]>([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const loadSpreadData = async () => {
      try {
        const [positionsData, descriptionData] = await Promise.all([
          getSpreadPositions(spreadType),
          getSpreadDescription(spreadType)
        ]);
        setPositions(positionsData);
        setDescription(descriptionData);
      } catch (error) {
        console.error('Failed to load spread data:', error);
      }
    };

    loadSpreadData();
  }, [spreadType]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-mystic p-6">
      <div className="w-full max-w-3xl animate-fade-in">
        <div className="bg-card p-10 rounded-2xl shadow-card border border-border">
          <div className="flex items-center justify-center mb-8">
            <HandHeart className="w-12 h-12 text-accent animate-glow-pulse" />
          </div>

          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            {spreadType}장 배열법
          </h2>

          {/* 질문이 있는 경우에만 표시 */}
          {question && (
            <div className="bg-secondary/50 p-6 rounded-xl mb-8 border border-border">
              <p className="text-sm text-muted-foreground mb-2">당신의 질문:</p>
              <p className="text-foreground font-medium italic">"{question}"</p>
            </div>
          )}

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {positions.map((pos) => (
                <div
                  key={pos.position}
                  className="bg-secondary/30 p-4 rounded-lg border border-border"
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                        {pos.position + 1}
                      </div>
                      <h4 className="font-semibold text-foreground">{pos.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* 질문이 있는 경우에만 "질문 다시 하기" 버튼 표시 */}
              {question && (
                <Button
                  onClick={onBack}
                  variant="outline"
                  size="lg"
                  className="bg-secondary hover:bg-secondary/80 border-border"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  질문 다시 하기
                </Button>
              )}
              <Button
                onClick={onStart}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow"
              >
                카드 뽑기 시작
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
