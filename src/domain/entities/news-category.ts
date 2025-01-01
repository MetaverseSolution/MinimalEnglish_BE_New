export class NewsCategoryEntity {
  public id?: number;
  public vi_name: string;
  public en_name: string;
  public vi_description?: string | null;
  public en_description?: string | null;
  public order?: number | null;
  public status: number;
  public created_at?: Date | null;
  public updated_at?: Date | null;
  public created_by?: string | null;
  public updated_by?: string | null;

  constructor(newsCategoryEntity: {
    id?: number;
    vi_name: string;
    en_name: string;
    vi_description?: string;
    en_description?: string;
    order?: number;
    status: number;
    created_at?: Date;
    updated_at?: Date;
    created_by?: string;
    updated_by?: string;
  }) {
    this.id = newsCategoryEntity.id;
    this.vi_name = newsCategoryEntity.vi_name;
    this.en_name = newsCategoryEntity.en_name;
    this.vi_description = newsCategoryEntity.vi_description;
    this.en_description = newsCategoryEntity.en_description;
    this.order = newsCategoryEntity.order;
    this.status = newsCategoryEntity.status;
    this.created_at = newsCategoryEntity.created_at;
    this.updated_at = newsCategoryEntity.updated_at;
    this.created_by = newsCategoryEntity.created_by;
    this.updated_by = newsCategoryEntity.updated_by;
  }
}
