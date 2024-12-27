export class ConfigSystem {
  public id?: number;
  public group: string;
  public type: string;
  public value: string;
  public image?: string;
  public descriptionVi: string;
  public descriptionEn?: string;
  public order?: number;
  public blockDelete?: boolean;
  public status?: boolean;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: string;
  public updatedBy?: string;

  constructor(config: {
    id?: number;
    group: string;
    type: string;
    value: string;
    image?: string;
    descriptionVi: string;
    descriptionEn?: string;
    order?: number;
    blockDelete?: boolean;
    status?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
  }) {
    this.id = config.id;
    this.group = config.group;
    this.type = config.type;
    this.value = config.value;
    this.image = config.image;
    this.descriptionVi = config.descriptionVi;
    this.descriptionEn = config.descriptionEn;
    this.order = config.order;
    this.blockDelete = config.blockDelete;
    this.status = config.status;
    this.createdAt = config.createdAt;
    this.updatedAt = config.updatedAt;
    this.createdBy = config.createdBy;
    this.updatedBy = config.updatedBy;
  }
}
