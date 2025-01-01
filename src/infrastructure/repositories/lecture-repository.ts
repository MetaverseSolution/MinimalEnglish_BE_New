import { LecturesRepository } from "@application/common/interfaces";

export function makeLecturesRepository({ db }: Dependencies): LecturesRepository {
  return {
    async getByLectureType(params: { language: string; lecture_type_id: number; size?: number; page?: number }) {
      const { lecture_type_id, size = 10, page = 1 } = params;

      const lectures = await db.lecture.findMany({
        where: {
          status: 1,
          lecture_type_id
        },
        orderBy: {
          order: 'asc',
        },
        skip: (page - 1) * size,
        take: size,
      });

      const total = await db.lecture.count({
        where: {
          status: 1,
        },
      });

      return {
        data: lectures.map((lecture) => ({
          ...lecture,
          id: Number(lecture.id),
          lecture_type_id: Number(lecture.lecture_type_id)
        })),
        total,
      };
    },

    async getById(params: { language: string; id: number }) {
      const { id } = params;
      const lectures = await db.lecture.findFirst({
        where: {
          id,
          status: 1
        }
      });

      return lectures ? {
        ...lectures,
        id: Number(lectures.id),
        lecture_type_id: Number(lectures.lecture_type_id)
      } : null;
    }
  }
}
