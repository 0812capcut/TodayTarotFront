import { SpreadType } from "@/types/tarot";
import { findMatchingPattern, getSpreadDescription as getDescription } from "./dataLoader";

export async function recommendSpread(question: string): Promise<SpreadType> {
  try {
    const matchedSpread = await findMatchingPattern(question);
    return matchedSpread || "3"; // 기본값: 3배열법
  } catch (error) {
    console.error('Failed to recommend spread:', error);
    return "3"; // 오류 시 기본값
  }
}

export async function getSpreadDescription(spreadType: SpreadType): Promise<string> {
  try {
    return await getDescription(spreadType);
  } catch (error) {
    console.error('Failed to get spread description:', error);
    return "알 수 없는 스프레드입니다.";
  }
}
