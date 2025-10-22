// GPT 연동을 위한 유틸리티 함수들

interface GPTIntegrationData {
  question: string;
  returnUrl?: string;
  sessionId?: string;
}

// 질문 데이터를 로컬 스토리지에 저장
export const saveQuestionData = (data: GPTIntegrationData): string => {
  const sessionId = data.sessionId || `gpt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  const questionData = {
    ...data,
    sessionId,
    timestamp: Date.now()
  };
  
  localStorage.setItem(`gpt_question_${sessionId}`, JSON.stringify(questionData));
  return sessionId;
};

// 질문 데이터를 로컬 스토리지에서 가져오기
export const getQuestionData = (sessionId: string): GPTIntegrationData | null => {
  try {
    const data = localStorage.getItem(`gpt_question_${sessionId}`);
    if (data) {
      const parsed = JSON.parse(data);
      // 1시간 이내 데이터만 유효
      if (Date.now() - parsed.timestamp < 3600000) {
        return parsed;
      } else {
        localStorage.removeItem(`gpt_question_${sessionId}`);
      }
    }
  } catch (error) {
    console.error('질문 데이터 로드 오류:', error);
  }
  return null;
};

// 질문 데이터 삭제
export const clearQuestionData = (sessionId: string): void => {
  localStorage.removeItem(`gpt_question_${sessionId}`);
};

// GPT용 링크 생성
export const generateGPTLink = (question: string, returnUrl: string): string => {
  const sessionId = `gpt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  // 질문 데이터를 로컬 스토리지에 저장
  saveQuestionData({
    question,
    returnUrl,
    sessionId
  });
  
  // 세션 ID만 URL에 포함
  return `https://todaytarotfront.vercel.app/?session=${sessionId}`;
};
