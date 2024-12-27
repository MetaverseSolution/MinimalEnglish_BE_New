export class Lecture {
  public id?: number;
  public lectureTypeId: number;
  public viTitle: string;
  public enTitle: string;
  public viDescription?: string;
  public enDescription?: string;
  public viContent: string;
  public enContent: string;
  public associcateLink?: string;
  public viewer: number;
  public image?: string;
  public order?: number;
  public status: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: string;
  public updatedBy?: string;

  constructor(lecture: {
    id?: number;
    lectureTypeId: number;
    viTitle: string;
    enTitle: string;
    viDescription?: string;
    enDescription?: string;
    viContent: string;
    enContent: string;
    associcateLink?: string;
    viewer: number;
    image?: string;
    order?: number;
    status: number;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
  }) {
    this.id = lecture.id;
    this.lectureTypeId = lecture.lectureTypeId;
    this.viTitle = lecture.viTitle;
    this.enTitle = lecture.enTitle;
    this.viDescription = lecture.viDescription;
    this.enDescription = lecture.enDescription;
    this.viContent = lecture.viContent;
    this.enContent = lecture.enContent;
    this.associcateLink = lecture.associcateLink;
    this.viewer = lecture.viewer;
    this.image = lecture.image;
    this.order = lecture.order;
    this.status = lecture.status;
    this.createdAt = lecture.createdAt;
    this.updatedAt = lecture.updatedAt;
    this.createdBy = lecture.createdBy;
    this.updatedBy = lecture.updatedBy;
  }
}
