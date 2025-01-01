import { map } from "./list-highlight-classes-query-mapper";
import { validate } from "./list-highlight-classes-query-validator";

export type ListHightlightClassesQuery = Readonly<{
  language: string;
  size?: number;
  page?: number
}>;

export function makeListHightlightClassesQuery({ classesRepository }: Pick<Dependencies, 'classesRepository'>) {
  return async function listHightlightClassesQuery(query: ListHightlightClassesQuery) {
    await validate(query);

    const { language, size, page } = query;

    const { data, total } = await classesRepository.getHighlightClasses({ language, size, page });

    const per_page = size;
    const current_page = page;
    const last_page = total && per_page ? Math.ceil(total / per_page) : 1;

    return {
      data: data.map((classItem) => map(classItem, language)),
      total,
      per_page,
      current_page,
      last_page,
    }
  };
}
