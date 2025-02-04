import { CustomerReviewDTO } from "@domain/dtos/customer-review";
import { CustomerReviewEntity } from "@domain/entities";

export function map(customerReview: CustomerReviewEntity): CustomerReviewDTO {
  return {
    id: customerReview.id ?? null,
    review: customerReview.review ?? null,
    score: customerReview.score ?? null,
    media_url: customerReview.media_url,
    order: customerReview.order ?? null,
    status: customerReview.status,
    created_at: customerReview.created_at?.toISOString() ?? null,
    updated_at: customerReview.updated_at?.toISOString() ?? null,
    created_by: customerReview.created_by ?? null,
    updated_by: customerReview.updated_by ?? null,
  };
}
