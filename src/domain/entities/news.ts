export class NewsEntity {
  public id?: number;
  public news_category_id: number;
  public vi_title: string;
  public en_title: string;
  public vi_description?: string | null;
  public en_description?: string | null;
  public vi_content: string;
  public en_content: string;
  public slug: string;
  public read_time?: number | null;
  public image?: string | null;
  public order?: number | null;
  public status: number;
  public created_at?: Date | null;
  public updated_at?: Date | null;
  public created_by?: string | null;
  public updated_by?: string | null;

  constructor(newsEntity: {
    id?: number;
    news_category_id: number;
    vi_title: string;
    en_title: string;
    vi_description?: string;
    en_description?: string;
    vi_content: string;
    en_content: string;
    slug: string;
    read_time?: number;
    image?: string;
    order?: number;
    status: number;
    created_at?: Date;
    updated_at?: Date;
    created_by?: string;
    updated_by?: string;
  }) {
    this.id = newsEntity.id;
    this.news_category_id = newsEntity.news_category_id;
    this.vi_title = newsEntity.vi_title;
    this.en_title = newsEntity.en_title;
    this.vi_description = newsEntity.vi_description;
    this.en_description = newsEntity.en_description;
    this.vi_content = newsEntity.vi_content;
    this.en_content = newsEntity.en_content;
    this.slug = newsEntity.slug;
    this.read_time = newsEntity.read_time ?? 0;
    this.image = newsEntity.image;
    this.order = newsEntity.order;
    this.status = newsEntity.status;
    this.created_at = newsEntity.created_at;
    this.updated_at = newsEntity.updated_at;
    this.created_by = newsEntity.created_by;
    this.updated_by = newsEntity.updated_by;
  }
}
