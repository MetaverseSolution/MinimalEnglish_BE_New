export interface CoreSystemConfigDTO {
  id: number;
  group: string;
  type: string;
  value: string;
  image: null | string;
  description_vi: string;
  description_en: string;
  order: number;
  block_delete: number;
  status: number;
  created_at: string | null;
  updated_at: string | null;
  created_by: string | null;
  updated_by: string | null;
}
