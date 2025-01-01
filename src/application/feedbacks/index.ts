import { makeListFeedbacksQuery } from "./queries/list-feedbacks";

export function makeFeedbacksUseCases(dependencies: Dependencies) {
  return {
    queries: {
      listFeedbacks: makeListFeedbacksQuery(dependencies),
    },
  };
}
