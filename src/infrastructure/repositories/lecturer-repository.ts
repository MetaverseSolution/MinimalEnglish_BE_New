import { LecturersRepository } from "@application/common/interfaces";

export function makeLecturersRepository({ db }: Dependencies): LecturersRepository {
  return {
    async list(params: { language: string; size?: number; page?: number }) {
      const { size = 10, page = 1 } = params;

      const lecturers = await db.lecturer.findMany({
        where: {
          status: 1,
        },
        orderBy: {
          order: 'asc',
        },
        skip: (page - 1) * size,
        take: size,
      });

      const total = await db.lecturer.count({
        where: {
          status: 1,
        },
      });

      return {
        data: lecturers.map((lecturer) => ({
          ...lecturer,
          id: Number(lecturer.id),
        })),
        total,
      };
    },
  }
}
