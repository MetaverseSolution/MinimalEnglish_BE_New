export class Document {
  public id?: number;
  public documentTypeId: number;
  public viTitle: string;
  public enTitle: string;
  public viDescription?: string;
  public enDescription?: string;
  public viContent: string;
  public enContent: string;
  public linkFile?: string;
  public downloaded: number;
  public image?: string;
  public order?: number;
  public status: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: string;
  public updatedBy?: string;
  public documentLink?: string;

  constructor(data: {
    id?: number;
    documentTypeId: number;
    viTitle: string;
    enTitle: string;
    viDescription?: string;
    enDescription?: string;
    viContent: string;
    enContent: string;
    linkFile?: string;
    downloaded: number;
    image?: string;
    order?: number;
    status: number;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
    documentLink?: string;
  }) {
    this.id = data.id;
    this.documentTypeId = data.documentTypeId;
    this.viTitle = data.viTitle;
    this.enTitle = data.enTitle;
    this.viDescription = data.viDescription;
    this.enDescription = data.enDescription;
    this.viContent = data.viContent;
    this.enContent = data.enContent;
    this.linkFile = data.linkFile;
    this.downloaded = data.downloaded;
    this.image = data.image;
    this.order = data.order;
    this.status = data.status;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.createdBy = data.createdBy;
    this.updatedBy = data.updatedBy;
    this.documentLink = data.documentLink;
  }
}
