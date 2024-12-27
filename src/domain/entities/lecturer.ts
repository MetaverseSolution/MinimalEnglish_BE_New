export class Lecturer {
  public id?: number;
  public avatar: string;
  public name: string;
  public viTitle: string;
  public enTitle?: string;
  public viContent?: string;
  public enContent?: string;
  public order?: number;
  public status: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: string;
  public updatedBy?: string;

  constructor(lecturer: {
    id?: number;
    avatar: string;
    name: string;
    viTitle: string;
    enTitle?: string;
    viContent?: string;
    enContent?: string;
    order?: number;
    status: number;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
  }) {
    this.id = lecturer.id;
    this.avatar = lecturer.avatar;
    this.name = lecturer.name;
    this.viTitle = lecturer.viTitle;
    this.enTitle = lecturer.enTitle;
    this.viContent = lecturer.viContent;
    this.enContent = lecturer.enContent;
    this.order = lecturer.order;
    this.status = lecturer.status;
    this.createdAt = lecturer.createdAt;
    this.updatedAt = lecturer.updatedAt;
    this.createdBy = lecturer.createdBy;
    this.updatedBy = lecturer.updatedBy;
  }
}
