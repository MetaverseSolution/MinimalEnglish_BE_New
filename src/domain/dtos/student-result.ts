export interface StudentResultDTO {
  id: number | null;
  class: IClass;
  name: string | null;
  score: string | null;
  content: string | null;
  result_image: string;
  order: number | null;
  status: number;
  created_at: string | null;
  updated_at: string | null;
  created_by: string | null;
  updated_by: string | null;
}

interface IClass {
  id: string;
  name: string | null;
  description: string | null;
  image: string | null;
}
