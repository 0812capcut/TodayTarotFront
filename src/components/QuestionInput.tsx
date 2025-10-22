import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";

interface QuestionInputProps {
  onSubmit: (question: string) => void;
}

export function QuestionInput({ onSubmit }: QuestionInputProps) {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    if (question.trim()) {
      onSubmit(question.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-mystic p-6">
      <div className="w-full max-w-2xl animate-fade-in">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-16 h-16 text-accent animate-float" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Tarot by You
          </h1>
          <p className="text-lg text-muted-foreground">
            당신의 질문에 타로가 답합니다
          </p>
        </div>

        <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
          <label className="block mb-4 text-sm font-medium text-foreground">
            무엇이 궁금하신가요?
          </label>
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="예: 그 사람의 속마음을 알고 싶어요"
            className="min-h-[120px] resize-none bg-secondary border-border text-foreground placeholder:text-muted-foreground mb-6"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
          <Button
            onClick={handleSubmit}
            disabled={!question.trim()}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            size="lg"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            타로 보기
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            💫 타로는 무의식을 비추는 언어입니다.<br />
            마음속 질문이 또렷할수록,<br />
            타로는 당신의 무의식에 더 가까워집니다.
          </p>
        </div>
      </div>
    </div>
  );
}
