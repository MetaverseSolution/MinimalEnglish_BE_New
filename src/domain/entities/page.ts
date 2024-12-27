export class PageEntity {
  public id?: bigint;
  public vi_name: string;
  public en_name: string;
  public url: string;
  public seo?: string | null;
  public order?: number | null;
  public status: number;
  public created_at?: Date | null;
  public updated_at?: Date | null;
  public created_by?: string | null;
  public updated_by?: string | null;

  constructor(pageEntity: {
    id?: bigint;
    vi_name: string;
    en_name: string;
    url: string;
    seo?: string | null;
    order?: number | null;
    status: number;
    created_at?: Date | null;
    updated_at?: Date | null;
    created_by?: string | null;
    updated_by?: string | null;
  }) {
    this.id = pageEntity.id;
    this.vi_name = pageEntity.vi_name;
    this.en_name = pageEntity.en_name;
    this.url = pageEntity.url;
    this.seo = pageEntity.seo;
    this.order = pageEntity.order;
    this.status = pageEntity.status;
    this.created_at = pageEntity.created_at;
    this.updated_at = pageEntity.updated_at;
    this.created_by = pageEntity.created_by;
    this.updated_by = pageEntity.updated_by;
  }
}
