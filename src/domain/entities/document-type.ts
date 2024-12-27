export class DocumentType {
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

  constructor(documentType: {
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
    this.id = documentType.id;
    this.viName = documentType.viName;
    this.enName = documentType.enName;
    this.viDescription = documentType.viDescription;
    this.enDescription = documentType.enDescription;
    this.order = documentType.order;
    this.status = documentType.status;
    this.createdAt = documentType.createdAt;
    this.updatedAt = documentType.updatedAt;
    this.createdBy = documentType.createdBy;
    this.updatedBy = documentType.updatedBy;
  }
}
