import { NewsRepository } from "@application/common/interfaces";

export function makeNewsRepository({ db }: Dependencies): NewsRepository {
  return {
    async getRelated(params: { language: string; news_category_id: number; id: number, size?: number; page?: number }) {
      const { id, news_category_id, size = 10, page = 1 } = params;

      const news = await db.news.findMany({
        where: {
          NOT: { id },
          status: 1,
          news_category_id,
        },
        orderBy: {
          order: 'asc',
        },
        skip: (page - 1) * size,
        take: size,
      });

      const total = await db.news.count({
        where: {
          status: 1,
        },
      });

      return {
        data: news.map((newsItem) => ({
          ...newsItem,
          id: Number(newsItem.id),
          news_category_id: Number(newsItem.news_category_id),
        })),
        total,
      };
    },

    async getByCategory(params: { language: string; news_category_id: number; size?: number; page?: number }) {
      const { news_category_id, size = 10, page = 1 } = params;

      const news = await db.news.findMany({
        where: {
          status: 1,
          news_category_id
        },
        orderBy: {
          order: 'asc',
        },
        skip: (page - 1) * size,
        take: size,
      });

      const total = await db.news.count({
        where: {
          status: 1,
        },
      });

      return {
        data: news.map((newsItem) => ({
          ...newsItem,
          id: Number(newsItem.id),
          news_category_id: Number(newsItem.news_category_id),
        })),
        total,
      };
    },

    async getBySlug(params: { language: string; slug: string }) {
      const { slug } = params;

      const news = await db.news.findFirst({
        where: {
          slug,
          status: 1
        }
      });

      return news ? {
        ...news,
        id: Number(news.id),
        news_category_id: Number(news.news_category_id),
      } : null;
    }
  }
}
