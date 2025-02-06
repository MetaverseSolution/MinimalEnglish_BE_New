import { CustomerReviewsRepository } from "@application/common/interfaces";

export function makeCustomerReviewsRepository({ db }: Dependencies): CustomerReviewsRepository {
  return {
    async list() {
      const customerReviews = await db.customer_reviews.findMany({
        where: { status: 1 },
        orderBy: {
          id: 'desc',
        },
      });
      return customerReviews.map(customerReview => ({
        ...customerReview,
        score: Number(customerReview.score),
        id: Number(customerReview.id),
      }));
    }
  }
}
