export class LectureType {
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

  constructor(lectureType: {
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
    this.id = lectureType.id;
    this.viName = lectureType.viName;
    this.enName = lectureType.enName;
    this.viDescription = lectureType.viDescription;
    this.enDescription = lectureType.enDescription;
    this.order = lectureType.order;
    this.status = lectureType.status;
    this.createdAt = lectureType.createdAt;
    this.updatedAt = lectureType.updatedAt;
    this.createdBy = lectureType.createdBy;
    this.updatedBy = lectureType.updatedBy;
  }
}
