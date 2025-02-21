export interface CustomerReviewDTO {
  id: number | null;
  review: string | null;
  score: number | string | null;
  media_url: string;
  order: number | null;
  status: number;
  created_at: string | null;
  updated_at: string | null;
  created_by: string | null;
  updated_by: string | null;
}
