export type ChapterConfig = {
  start: number;
  end: number;
};

// 600vh is enough for 6 chapters
export const TOTAL_SCROLL_HEIGHT = '600vh';

export const CHAPTER_1: ChapterConfig = { start: 0, end: 0.16 }; // Globe
export const CHAPTER_2: ChapterConfig = { start: 0.16, end: 0.33 }; // Truck
export const CHAPTER_3: ChapterConfig = { start: 0.33, end: 0.50 }; // Rail
export const CHAPTER_4: ChapterConfig = { start: 0.50, end: 0.66 }; // Port
export const CHAPTER_5: ChapterConfig = { start: 0.66, end: 0.83 }; // Ocean
export const CHAPTER_6: ChapterConfig = { start: 0.83, end: 1.0 }; // Arrival

export const CHAPTERS: Record<string, ChapterConfig> = {
  '1': CHAPTER_1,
  '2': CHAPTER_2,
  '3': CHAPTER_3,
  '4': CHAPTER_4,
  '5': CHAPTER_5,
  '6': CHAPTER_6,
};
