import { map } from "./list-feedbacks-query-mapper";
import { validate } from "./list-feedbacks-query-validator";

export type ListFeedbacksQuery = Readonly<{
  language: string;
  size?: number;
  page?: number
}>;

export function makeListFeedbacksQuery({ feedbacksRepository }: Pick<Dependencies, 'feedbacksRepository'>) {
  return async function listFeedbacksQuery(query: ListFeedbacksQuery) {
    await validate(query);

    const { language, size, page } = query;

    const { data, total } = await feedbacksRepository.list({ language, size, page });

    const per_page = size;
    const current_page = page;
    const last_page = total && per_page ? Math.ceil(total / per_page) : 1;

    return {
      data: data.map((feedbackItem) => map(feedbackItem, language)),
      total,
      per_page,
      current_page,
      last_page,
    }
  };
}
