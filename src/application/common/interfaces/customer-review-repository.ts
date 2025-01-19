import { CustomerReviewEntity } from "@domain/entities/customer-review";

export interface CustomerReviewsRepository {
  list(): Promise<Array<CustomerReviewEntity>>;
}
