export class NewsCategory {
  public id?: number;
  public viName: string;
  public enName: string;
  public viDescription?: string;
  public enDescription?: string;
  public order?: number;
  public status: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: string;
  public updatedBy?: string;

  constructor(newsCategory: {
    id?: number;
    viName: string;
    enName: string;
    viDescription?: string;
    enDescription?: string;
    order?: number;
    status: number;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
  }) {
    this.id = newsCategory.id;
    this.viName = newsCategory.viName;
    this.enName = newsCategory.enName;
    this.viDescription = newsCategory.viDescription;
    this.enDescription = newsCategory.enDescription;
    this.order = newsCategory.order;
    this.status = newsCategory.status;
    this.createdAt = newsCategory.createdAt;
    this.updatedAt = newsCategory.updatedAt;
    this.createdBy = newsCategory.createdBy;
    this.updatedBy = newsCategory.updatedBy;
  }
}
