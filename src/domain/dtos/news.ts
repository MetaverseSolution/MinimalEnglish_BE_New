export interface NewsDTO {
  id: string;
  news_category_id: number;
  news_category_name: string;
  slug: string;
  read_time: number;
  image: string;
  title: string | null;
  content: string | null;
  description: string | null;
  order: number | null;
  status: number;
  created_at: string | null;
  updated_at: string | null;
  created_by: string | null;
  updated_by: string | null;
}
