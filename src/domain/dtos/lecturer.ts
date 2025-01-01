export interface LecturerDTO {
  id: string;
  name: string;
  avatar: string;
  title: string | null;
  content: string | null;
  order: number | null;
  status: number;
  created_at: string | null;
  updated_at: string | null;
  created_by: string | null;
  updated_by: string | null;
}
