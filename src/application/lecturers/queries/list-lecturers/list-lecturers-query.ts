import { map } from "./list-lecturers-query-mapper";
import { validate } from "./list-lecturers-query-validator";

export type ListLecturersQuery = Readonly<{
  language: string;
  size?: number;
  page?: number
}>;

export function makeListLecturersQuery({ lecturersRepository }: Pick<Dependencies, 'lecturersRepository'>) {
  return async function listLecturersQuery(query: ListLecturersQuery) {
    await validate(query);

    const { language, size, page } = query;

    const { data, total } = await lecturersRepository.list({ language, size, page });

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
