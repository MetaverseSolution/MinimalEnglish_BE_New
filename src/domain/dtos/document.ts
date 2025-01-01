export interface DocumentDTO {
  id: number;
  document_type_id: number;
  link_file: string;
  downloaded: number;
  image: string;
  order: number | null;
  status: number;
  title: string;
  description: string;
  content: string;
  created_at: string | null;
  updated_at: string | null;
  created_by: string | null;
  updated_by: string | null;
}
