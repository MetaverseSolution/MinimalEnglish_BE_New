export class DocumentEntity {
  public id?: number;
  public document_type_id: number;
  public vi_title: string;
  public en_title: string;
  public vi_description?: string | null;
  public en_description?: string | null;
  public vi_content: string;
  public en_content: string;
  public link_file?: string | null;
  public downloaded: number;
  public image?: string | null;
  public order?: number | null;
  public status: number;
  public created_at?: Date | null;
  public updated_at?: Date | null;
  public created_by?: string | null;
  public updated_by?: string | null;
  public document_link?: string | null;

  constructor(documentEntity: {
    id?: number;
    document_type_id: number;
    vi_title: string;
    en_title: string;
    vi_description?: string;
    en_description?: string;
    vi_content: string;
    en_content: string;
    link_file?: string;
    downloaded: number;
    image?: string;
    order?: number;
    status: number;
    created_at?: Date;
    updated_at?: Date;
    created_by?: string;
    updated_by?: string;
    document_link?: string;
  }) {
    this.id = documentEntity.id;
    this.document_type_id = documentEntity.document_type_id;
    this.vi_title = documentEntity.vi_title;
    this.en_title = documentEntity.en_title;
    this.vi_description = documentEntity.vi_description;
    this.en_description = documentEntity.en_description;
    this.vi_content = documentEntity.vi_content;
    this.en_content = documentEntity.en_content;
    this.link_file = documentEntity.link_file;
    this.downloaded = documentEntity.downloaded;
    this.image = documentEntity.image;
    this.order = documentEntity.order;
    this.status = documentEntity.status;
    this.created_at = documentEntity.created_at;
    this.updated_at = documentEntity.updated_at;
    this.created_by = documentEntity.created_by;
    this.updated_by = documentEntity.updated_by;
    this.document_link = documentEntity.document_link;
  }
}
