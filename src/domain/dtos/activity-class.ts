export interface ActivityClassDTO {
  id: number | null;
  class: IClass;
  name: string | null;
  video_url: string | null;
  image_url: string | null;
  status: number;
  order: number | null;
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
