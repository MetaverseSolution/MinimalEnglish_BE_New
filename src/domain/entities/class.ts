export class Class {
  public id?: number;
  public viName: string;
  public enName: string;
  public viDescription?: string;
  public enDescription?: string;
  public viContent?: string;
  public enContent?: string;
  public image?: string;
  public order?: number;
  public status: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: string;
  public updatedBy?: string;

  constructor(classEntity: {
    id?: number;
    viName: string;
    enName: string;
    viDescription?: string;
    enDescription?: string;
    viContent?: string;
    enContent?: string;
    image?: string;
    order?: number;
    status: number;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
  }) {
    this.id = classEntity.id;
    this.viName = classEntity.viName;
    this.enName = classEntity.enName;
    this.viDescription = classEntity.viDescription;
    this.enDescription = classEntity.enDescription;
    this.viContent = classEntity.viContent;
    this.enContent = classEntity.enContent;
    this.image = classEntity.image;
    this.order = classEntity.order;
    this.status = classEntity.status;
    this.createdAt = classEntity.createdAt;
    this.updatedAt = classEntity.updatedAt;
    this.createdBy = classEntity.createdBy;
    this.updatedBy = classEntity.updatedBy;
  }
}
