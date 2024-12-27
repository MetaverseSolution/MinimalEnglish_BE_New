import { SectionsRepository } from "@application/common/interfaces";

export function makeSectionsRepository({ db }: Dependencies): SectionsRepository {
  return {
    async getByPage(params: { language: string, url: string }) {
      if (params.language == "vi") {
        const pages = await db.section.findFirst({
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
    async getByPageUrl(params: { language: string }) {
      if (params.language == "vi") {
        const pages = await db.section.findMany({
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
