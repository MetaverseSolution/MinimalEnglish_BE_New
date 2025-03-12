export interface LectureDTO {
  id: string;
  lecture_type_id: number;
  associcate_link: string | null;
  link_file: string | null;
  viewer: number;
  image: string;
  title: string | null;
  description: string | null;
  content: string | null;
  order: number | null;
  status: number;
  created_at: string | null;
  updated_at: string | null;
  created_by: string | null;
  updated_by: string | null;
}
