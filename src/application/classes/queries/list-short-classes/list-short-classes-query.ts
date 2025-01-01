import { map } from "./list-short-classes-query-mapper";
import { validate } from "./list-short-classes-query-validator";

export type ListShortClassesQuery = Readonly<{
  language: string;
}>;

export function makeListShortClassesQuery({ classesRepository }: Pick<Dependencies, 'classesRepository'>) {
  return async function listShortClassesQuery(query: ListShortClassesQuery) {
    await validate(query);

    const { language } = query;

    const classes = await classesRepository.getListShort({ language });

    return classes.map((classItem) => map(classItem, language));
  };
}
