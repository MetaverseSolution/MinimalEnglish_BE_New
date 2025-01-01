export class ClassEntity {
  public id?: number;
  public vi_name: string;
  public en_name: string;
  public vi_description?: string | null;
  public en_description?: string | null;
  public vi_content?: string | null;
  public en_content?: string | null;
  public image?: string | null;
  public order?: number | null;
  public status: number;
  public created_at?: Date | null;
  public updated_at?: Date | null;
  public created_by?: string | null;
  public updated_by?: string | null;

  constructor(classEntity: {
    id?: number;
    vi_name: string;
    en_name: string;
    vi_description?: string;
    en_description?: string;
    vi_content?: string;
    en_content?: string;
    image?: string;
    order?: number;
    status: number;
    created_at?: Date;
    updated_at?: Date;
    created_by?: string;
    updated_by?: string;
  }) {
    this.id = classEntity.id;
    this.vi_name = classEntity.vi_name;
    this.en_name = classEntity.en_name;
    this.vi_description = classEntity.vi_description;
    this.en_description = classEntity.en_description;
    this.vi_content = classEntity.vi_content;
    this.en_content = classEntity.en_content;
    this.image = classEntity.image;
    this.order = classEntity.order;
    this.status = classEntity.status;
    this.created_at = classEntity.created_at;
    this.updated_at = classEntity.updated_at;
    this.created_by = classEntity.created_by;
    this.updated_by = classEntity.updated_by;
  }
}
