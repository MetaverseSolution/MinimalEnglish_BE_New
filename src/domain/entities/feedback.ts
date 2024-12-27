export class Feedback {
  public id?: number;
  public name?: string;
  public address?: string;
  public avatar?: string;
  public viContent?: string;
  public enContent?: string;
  public image?: string;
  public image2?: string;
  public image3?: string;
  public image4?: string;
  public image5?: string;
  public image6?: string;
  public order?: number;
  public status: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: string;
  public updatedBy?: string;

  constructor(feedback: {
    id?: number;
    name?: string;
    address?: string;
    avatar?: string;
    viContent?: string;
    enContent?: string;
    image?: string;
    image2?: string;
    image3?: string;
    image4?: string;
    image5?: string;
    image6?: string;
    order?: number;
    status: number;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
  }) {
    this.id = feedback.id;
    this.name = feedback.name;
    this.address = feedback.address;
    this.avatar = feedback.avatar;
    this.viContent = feedback.viContent;
    this.enContent = feedback.enContent;
    this.image = feedback.image;
    this.image2 = feedback.image2;
    this.image3 = feedback.image3;
    this.image4 = feedback.image4;
    this.image5 = feedback.image5;
    this.image6 = feedback.image6;
    this.order = feedback.order;
    this.status = feedback.status;
    this.createdAt = feedback.createdAt;
    this.updatedAt = feedback.updatedAt;
    this.createdBy = feedback.createdBy;
    this.updatedBy = feedback.updatedBy;
  }
}
