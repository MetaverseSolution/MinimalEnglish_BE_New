export class FeedbackEntity {
  public id?: number;
  public name?: string | null;
  public address?: string | null;
  public avatar?: string | null;
  public vi_content?: string | null;
  public en_content?: string | null;
  public image?: string | null;
  public image_2?: string | null;
  public image_3?: string | null;
  public image_4?: string | null;
  public image_5?: string | null;
  public image_6?: string | null;
  public order?: number | null;
  public status: number;
  public created_at?: Date | null;
  public updated_at?: Date | null;
  public created_by?: string | null;
  public updated_by?: string | null;

  constructor(feedbackEntity: {
    id?: number;
    name?: string;
    address?: string;
    avatar?: string;
    vi_content?: string;
    en_content?: string;
    image?: string;
    image_2?: string;
    image_3?: string;
    image_4?: string;
    image_5?: string;
    image_6?: string;
    order?: number;
    status: number;
    created_at?: Date;
    updated_at?: Date;
    created_by?: string;
    updated_by?: string;
  }) {
    this.id = feedbackEntity.id;
    this.name = feedbackEntity.name;
    this.address = feedbackEntity.address;
    this.avatar = feedbackEntity.avatar;
    this.vi_content = feedbackEntity.vi_content;
    this.en_content = feedbackEntity.en_content;
    this.image = feedbackEntity.image;
    this.image_2 = feedbackEntity.image_2;
    this.image_3 = feedbackEntity.image_3;
    this.image_4 = feedbackEntity.image_4;
    this.image_5 = feedbackEntity.image_5;
    this.image_6 = feedbackEntity.image_6;
    this.order = feedbackEntity.order;
    this.status = feedbackEntity.status;
    this.created_at = feedbackEntity.created_at;
    this.updated_at = feedbackEntity.updated_at;
    this.created_by = feedbackEntity.created_by;
    this.updated_by = feedbackEntity.updated_by;
  }
}
