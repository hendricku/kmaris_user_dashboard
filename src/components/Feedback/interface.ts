export interface FeedbackItem {
  id: string | number;
  name: string;
  role?: string;
  avatarSrc?: string; // e.g., "/red.png" or "/blackk.png"
  rating?: number; // 0-5
  text: string;
  showIndicators?: boolean; // Controls the visibility of the indicator dots
}

export interface FeedbackProps {
  title?: string;
  items?: FeedbackItem[];
}