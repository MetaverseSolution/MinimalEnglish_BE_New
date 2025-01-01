export class ComponentEntity {
  public id?: number;
  public section_id: number;
  public vi_title: string;
  public en_title: string;
  public vi_content?: string | null;
  public en_content?: string | null;
  public image?: string | null;
  public image_2?: string | null;
  public image_3?: string | null;
  public image_4?: string | null;
  public image_5?: string | null;
  public image_6?: string | null;
  public image_7?: string | null;
  public order?: number | null;
  public status: number;
  public created_at?: Date | null;
  public updated_at?: Date | null;
  public created_by?: string | null;
  public updated_by?: string | null;

  constructor(componentEntity: {
    id?: number;
    section_id: number;
    vi_title: string;
    en_title: string;
    vi_content?: string;
    en_content?: string;
    image?: string;
    image_2?: string;
    image_3?: string;
    image_4?: string;
    image_5?: string;
    image_6?: string;
    image_7?: string;
    order?: number;
    status: number;
    created_at?: Date;
    updated_at?: Date;
    created_by?: string;
    updated_by?: string;
  }) {
    this.id = componentEntity.id;
    this.section_id = componentEntity.section_id;
    this.vi_title = componentEntity.vi_title;
    this.en_title = componentEntity.en_title;
    this.vi_content = componentEntity.vi_content;
    this.en_content = componentEntity.en_content;
    this.image = componentEntity.image;
    this.image_2 = componentEntity.image_2;
    this.image_3 = componentEntity.image_3;
    this.image_4 = componentEntity.image_4;
    this.image_5 = componentEntity.image_5;
    this.image_6 = componentEntity.image_6;
    this.image_7 = componentEntity.image_7;
    this.order = componentEntity.order;
    this.status = componentEntity.status;
    this.created_at = componentEntity.created_at;
    this.updated_at = componentEntity.updated_at;
    this.created_by = componentEntity.created_by;
    this.updated_by = componentEntity.updated_by;
  }
}
