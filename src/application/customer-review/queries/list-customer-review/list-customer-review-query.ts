import { map } from "./list-customer-review-query-mapper";

export function makeListCustomerReviewQuery({ customerReviewRepository }: Pick<Dependencies, 'customerReviewRepository'>) {
  return async function listCustomerReviewQuery() {

    const customerReviews = await customerReviewRepository.list();

    return customerReviews.map((customerReview) => map(customerReview));
  };
}
