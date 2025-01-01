import { NewsCategoriesRepository } from "@application/common/interfaces";

export function makeNewsCategoriesRepository({ db }: Dependencies): NewsCategoriesRepository {
  return {
    async list() {
      const newsCategories = await db.news_category.findMany({
        where: { status: 1 },
        orderBy: {
          order: 'asc',
        },
      });
      return newsCategories.map((newsCategory) => ({
        ...newsCategory,
        id: Number(newsCategory.id)
      }))
    }
  }
}
