import { SectionsRepository } from "@application/common/interfaces";

export function makeSectionsRepository({ db }: Dependencies): SectionsRepository {
  return {
    async getByPage(params: { language: string; page_id: string }) {
      const sections = await db.section.findMany({
        where: {
          status: 1,
          page_id: Number(params.page_id),
        },
        orderBy: { order: "asc" },
      });

      return sections.map((section) => ({
        ...section,
        id: Number(section.id),
        pageId: Number(section.page_id),
      }));
    },

    async getByPageUrl(params: { language: string; url: string }) {
      const page = await db.page.findFirst({
        where: { status: 1, url: params.url },
      });

      if (!page) return [];

      const sections = await db.section.findMany({
        where: {
          status: 1,
          page_id: page.id,
        },
        orderBy: { order: "asc" },
      });

      return sections.map((section) => ({
        ...section,
        id: Number(section.id),
        pageId: Number(section.page_id),
      }));
    },
  };
}
