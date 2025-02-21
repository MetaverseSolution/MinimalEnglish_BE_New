export class CustomerReviewEntity {
  public id?: number;
  public review?: string | null;
  public score?: number | string | null;
  public media_url: string;
  public order?: number | null;
  public status: number;
  public created_at?: Date | null;
  public updated_at?: Date | null;
  public created_by?: string | null;
  public updated_by?: string | null;

  constructor(customerReviewEntity: {
    id?: number;
    review?: string;
    score?: number;
    media_url: string;
    order?: number;
    status: number;
    created_at?: Date;
    updated_at?: Date;
    created_by?: string;
    updated_by?: string;
  }) {
    this.id = customerReviewEntity.id;
    this.review = customerReviewEntity.review;
    this.score = customerReviewEntity.score;
    this.media_url = customerReviewEntity.media_url;
    this.order = customerReviewEntity.order;
    this.status = customerReviewEntity.status;
    this.created_at = customerReviewEntity.created_at;
    this.updated_at = customerReviewEntity.updated_at;
    this.created_by = customerReviewEntity.created_by;
    this.updated_by = customerReviewEntity.updated_by;
  }
}
