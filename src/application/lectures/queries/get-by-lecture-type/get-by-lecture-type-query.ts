import { map } from "./get-by-lecture-type-query-mapper";
import { validate } from "./get-by-lecture-type-query-validator";

export type GetByLectureTypeQuery = Readonly<{
  language: string;
  lecture_type_id: number;
  size?: number;
  page?: number
}>;

export function makeGetByLectureTypeQuery({ lecturesRepository }: Pick<Dependencies, 'lecturesRepository'>) {
  return async function getByLectureTypeQuery(query: GetByLectureTypeQuery) {
    await validate(query);

    const { lecture_type_id, language, size, page } = query;

    const { data, total } = await lecturesRepository.getByLectureType({ lecture_type_id, language, size, page });

    const per_page = size;
    const current_page = page;
    const last_page = total && per_page ? Math.ceil(total / per_page) : 1;

    return {
      data: data.map((lectureItem) => map(lectureItem, language)),
      total,
      per_page,
      current_page,
      last_page,
    }
  };
}
