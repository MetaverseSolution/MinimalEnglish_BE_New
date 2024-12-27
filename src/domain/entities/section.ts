export class SectionEntity {
  public id?: number;
  public pageId: number;
  public vi_name: string;
  public en_name: string;
  public vi_description?: string | null;
  public en_description?: string | null;
  public image?: string | null;
  public order?: number | null;
  public status: number;
  public created_at?: Date | null;
  public updated_at?: Date | null;
  public created_by?: string | null;
  public updated_by?: string | null;

  constructor(sectionEntity: {
    id?: number;
    pageId: number;
    vi_name: string;
    en_name: string;
    vi_description?: string | null;
    en_description?: string | null;
    image?: string | null;
    order?: number | null;
    status: number;
    created_at?: Date | null;
    updated_at?: Date | null;
    created_by?: string | null;
    updated_by?: string | null;
  }) {
    this.id = sectionEntity.id;
    this.pageId = sectionEntity.pageId;
    this.vi_name = sectionEntity.vi_name;
    this.en_name = sectionEntity.en_name;
    this.vi_description = sectionEntity.vi_description;
    this.en_description = sectionEntity.en_description;
    this.image = sectionEntity.image;
    this.order = sectionEntity.order;
    this.status = sectionEntity.status;
    this.created_at = sectionEntity.created_at;
    this.updated_at = sectionEntity.updated_at;
    this.created_by = sectionEntity.created_by;
    this.updated_by = sectionEntity.updated_by;
  }
}
