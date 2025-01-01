import { ClassesRepository } from '@application/common/interfaces';

export function makeClassesRepository({ db }: Dependencies): ClassesRepository {
  return {
    async getHighlightClasses(params: { language: string; size?: number; page?: number }) {
      const { size = 10, page = 1 } = params;

      const classes = await db.renamedclass.findMany({
        where: {
          status: 1,
        },
        orderBy: {
          order: 'asc',
        },
        skip: (page - 1) * size,
        take: size,
      });

      const total = await db.renamedclass.count({
        where: {
          status: 1,
        },
      });

      return {
        data: classes.map((component) => ({
          ...component,
          id: Number(component.id),
        })),
        total,
      };
    },

    async getListShort() {
      const classes = await db.renamedclass.findMany({
        where: {
          status: 1,
        },
        orderBy: {
          order: 'asc',
        },
      });

      return classes.map((component) => ({
        ...component,
        id: Number(component.id),
      }));
    },

    async getById(params: { language: string; id: string }) {
      const { id } = params;
      const renamedClass = await db.renamedclass.findFirst({
        where: {
          id: Number(id),
          status: 1
        }
      });

      return renamedClass ? {
        ...renamedClass,
        id: Number(renamedClass.id)
      } : null;
    }
  }
}
