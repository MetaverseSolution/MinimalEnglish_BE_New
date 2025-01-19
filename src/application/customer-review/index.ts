import { makeListCustomerReviewQuery } from "./queries/list-customer-review";

export function makeCustomerReviewUseCases(dependencies: Dependencies) {
  return {
    queries: {
      listCustomerReviews: makeListCustomerReviewQuery(dependencies),
    },
  };
}
