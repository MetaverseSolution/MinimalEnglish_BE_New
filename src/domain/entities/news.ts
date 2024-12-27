export class News {
  public id?: number;
  public newsCategoryId: number;
  public viTitle: string;
  public enTitle: string;
  public viDescription?: string;
  public enDescription?: string;
  public viContent: string;
  public enContent: string;
  public slug: string;
  public readTime?: number;
  public image?: string;
  public order?: number;
  public status: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: string;
  public updatedBy?: string;

  constructor(news: {
    id?: number;
    newsCategoryId: number;
    viTitle: string;
    enTitle: string;
    viDescription?: string;
    enDescription?: string;
    viContent: string;
    enContent: string;
    slug: string;
    readTime?: number;
    image?: string;
    order?: number;
    status: number;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
  }) {
    this.id = news.id;
    this.newsCategoryId = news.newsCategoryId;
    this.viTitle = news.viTitle;
    this.enTitle = news.enTitle;
    this.viDescription = news.viDescription;
    this.enDescription = news.enDescription;
    this.viContent = news.viContent;
    this.enContent = news.enContent;
    this.slug = news.slug;
    this.readTime = news.readTime ?? 0;
    this.image = news.image;
    this.order = news.order;
    this.status = news.status;
    this.createdAt = news.createdAt;
    this.updatedAt = news.updatedAt;
    this.createdBy = news.createdBy;
    this.updatedBy = news.updatedBy;
  }
}
