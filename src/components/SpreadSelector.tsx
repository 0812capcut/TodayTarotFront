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
        const spreadsData = await loadSpreadsData();
        const options: SpreadOption[] = [];
        
        for (const [id, data] of Object.entries(spreadsData.spreads)) {
          options.push({
            id,
            name: data.name,
            description: data.description,
            cardCount: data.positions.length
          });
        }
        
        // 카드 수별로 정렬 (2장, 3장, 5장, 7장, 10장 순)
        options.sort((a, b) => a.cardCount - b.cardCount);
        setSpreadOptions(options);
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
            배열법을 선택해주세요
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            질문: <span className="text-accent font-medium">"{question}"</span>
          </p>
          <p className="text-sm text-muted-foreground">
            원하는 카드 수와 배열법을 선택하세요
          </p>
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
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {option.cardCount}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {option.name}
                    </h3>
                  </div>
                  <Sparkles className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
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

        {/* 도움말 */}
        <div className="mt-12 text-center">
          <div className="bg-card/50 p-6 rounded-xl border border-border/50">
            <h4 className="text-sm font-semibold text-foreground mb-2">
              💡 배열법 선택 가이드
            </h4>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>• <strong>2장</strong>: 간단한 선택과 결정</p>
              <p>• <strong>3장</strong>: 과거, 현재, 미래의 흐름</p>
              <p>• <strong>5장</strong>: 상황 분석과 해결책</p>
              <p>• <strong>7장</strong>: 종합적인 분석과 전망</p>
              <p>• <strong>10장</strong>: 인생 전체의 흐름</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
