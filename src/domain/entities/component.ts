export class Component {
  public id?: number;
  public sectionId: number;
  public viTitle: string;
  public enTitle: string;
  public viContent?: string;
  public enContent?: string;
  public image?: string;
  public image2?: string;
  public image3?: string;
  public image4?: string;
  public image5?: string;
  public image6?: string;
  public image7?: string;
  public order?: number;
  public status: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: string;
  public updatedBy?: string;

  constructor(component: {
    id?: number;
    sectionId: number;
    viTitle: string;
    enTitle: string;
    viContent?: string;
    enContent?: string;
    image?: string;
    image2?: string;
    image3?: string;
    image4?: string;
    image5?: string;
    image6?: string;
    image7?: string;
    order?: number;
    status: number;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: string;
    updatedBy?: string;
  }) {
    this.id = component.id;
    this.sectionId = component.sectionId;
    this.viTitle = component.viTitle;
    this.enTitle = component.enTitle;
    this.viContent = component.viContent;
    this.enContent = component.enContent;
    this.image = component.image;
    this.image2 = component.image2;
    this.image3 = component.image3;
    this.image4 = component.image4;
    this.image5 = component.image5;
    this.image6 = component.image6;
    this.image7 = component.image7;
    this.order = component.order;
    this.status = component.status;
    this.createdAt = component.createdAt;
    this.updatedAt = component.updatedAt;
    this.createdBy = component.createdBy;
    this.updatedBy = component.updatedBy;
  }
}
