export interface SectionDTO {
  id: string;
  image: string | null;
  name: string;
  description: string | null;
  order: number | null;
  status: number;
  created_at: string | null;
  updated_at: string | null;
  created_by: string | null;
  updated_by: string | null;
}
