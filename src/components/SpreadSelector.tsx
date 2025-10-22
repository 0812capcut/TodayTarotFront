import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SpreadType } from "@/types/tarot";
import { getSpreadData, loadSpreadsData } from "@/utils/dataLoader";
import { cn } from "@/lib/utils";
import { ArrowLeft, Sparkles } from "lucide-react";

interface SpreadSelectorProps {
  question: string;
  onSelect: (spreadType: SpreadType) => void;
  onBack: () => void;
}

interface SpreadOption {
  id: string;
  name: string;
  description: string;
  cardCount: number;
}

export function SpreadSelector({ question, onSelect, onBack }: SpreadSelectorProps) {
  const [spreadOptions, setSpreadOptions] = useState<SpreadOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadOptions = async () => {
      try {
        // 기본 배열법만 표시 (2장, 3장, 5장, 7장, 10장)
        const basicSpreads = [
          {
            id: "2",
            name: "2장의 카드 선택",
            description: "A 선택지, B 선택지를 볼 수 있습니다.",
            cardCount: 2
          },
          {
            id: "3", 
            name: "3장의 카드 선택",
            description: "과거, 현재, 미래를 볼 수 있습니다.",
            cardCount: 3
          },
          {
            id: "5",
            name: "5장의 카드 선택", 
            description: "상황, 문제, 해결, 결과, 전망을 볼 수 있습니다.",
            cardCount: 5
          },
          {
            id: "7",
            name: "7장의 카드 선택",
            description: "현재, 과거, 미래, 내면, 외부, 조언, 결과를 볼 수 있습니다.",
            cardCount: 7
          },
          {
            id: "10",
            name: "10장의 카드 선택",
            description: "현재 상황, 도전, 과거, 미래, 가능성, 근처 미래, 당신, 외부 영향, 희망, 결과를 볼 수 있습니다.",
            cardCount: 10
          }
        ];
        
        setSpreadOptions(basicSpreads);
      } catch (error) {
        console.error('Failed to load spread options:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadOptions();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-mystic flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">배열법을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-mystic p-6">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              질문 다시 하기
            </Button>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            원하는 카드 수를 선택하세요
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            질문: <span className="text-accent font-medium">"{question}"</span>
          </p>
          
          {/* 카드 선택 가이드 */}
          <div className="mt-6 flex justify-center">
            <div className="bg-card/50 p-6 rounded-xl border border-border/50 text-left max-w-2xl">
              <h4 className="text-sm font-semibold text-foreground mb-2 text-center">
                💡 카드 선택 가이드
              </h4>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• <strong>2장의 카드 선택</strong>: A 선택지, B 선택지 비교</p>
                <p>• <strong>3장의 카드 선택</strong>: 과거, 현재, 미래의 흐름</p>
                <p>• <strong>5장의 카드 선택</strong>: 상황, 문제, 해결, 결과, 전망</p>
                <p>• <strong>7장의 카드 선택</strong>: 현재, 과거, 미래, 내면, 외부, 조언, 결과</p>
                <p>• <strong>10장의 카드 선택</strong>: 인생 전체의 흐름과 조언</p>
              </div>
            </div>
          </div>
        </div>

        {/* 배열법 선택 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spreadOptions.map((option, index) => (
            <div
              key={option.id}
              className="group cursor-pointer"
              onClick={() => onSelect(option.id as SpreadType)}
            >
              <div className={cn(
                "bg-card p-6 rounded-2xl shadow-card border border-border",
                "hover:shadow-glow hover:border-accent/50 transition-all duration-300",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {option.cardCount}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {option.name}
                    </h3>
                  </div>
                  <Sparkles className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity mx-auto" />
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {option.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-accent font-medium">
                    {option.cardCount}장의 카드
                  </span>
                  <div className="text-xs text-muted-foreground">
                    선택하기 →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
