import { PagesRepository } from '@application/common/interfaces';

export function makePagesRepository({ db }: Dependencies): PagesRepository {
  return {
    async getByUrl(params: { language: string, url: string }) {
      if (params.language == "vi") {
        const pages = await db.page.findFirst({
          where: { vi_name: params.language, status: 1, url: params.url, },
          orderBy: {
            order: 'asc',
          },
        });
        return pages
      } else {
        const pages = await db.page.findFirst({
          where: { en_name: params.language, status: 1, url: params.url },
          orderBy: {
            order: 'asc',
          },
        });
        return pages
      }
    },
    async list(params: { language: string }) {
      if (params.language == "vi") {
        const pages = await db.page.findMany({
          where: { status: 1 },
          orderBy: {
            order: 'asc',
          },
        });
        return pages
      } else {
        const pages = await db.page.findMany({
          where: { status: 1 },
          orderBy: {
            order: 'asc',
          },
        });
        return pages
      }
    }
  }
}
