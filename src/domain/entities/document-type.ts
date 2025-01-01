export class DocumentTypeEntity {
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

  constructor(documentTypeEntity: {
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
    this.id = documentTypeEntity.id;
    this.vi_name = documentTypeEntity.vi_name;
    this.en_name = documentTypeEntity.en_name;
    this.vi_description = documentTypeEntity.vi_description;
    this.en_description = documentTypeEntity.en_description;
    this.order = documentTypeEntity.order;
    this.status = documentTypeEntity.status;
    this.created_at = documentTypeEntity.created_at;
    this.updated_at = documentTypeEntity.updated_at;
    this.created_by = documentTypeEntity.created_by;
    this.updated_by = documentTypeEntity.updated_by;
  }
}
