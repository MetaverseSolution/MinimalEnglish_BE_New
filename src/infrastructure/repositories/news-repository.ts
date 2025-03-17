import { NewsRepository } from "@application/common/interfaces";

export function makeNewsRepository({ db }: Dependencies): NewsRepository {
  return {
    async getRelated(params: { language: string; news_category_id: number; id: number, size?: number; page?: number }) {
      const { id, language, news_category_id, size = 10, page = 1 } = params;

      const news = await db.news.findMany({
        where: { NOT: { id }, status: 1, news_category_id },
        orderBy: { id: 'desc' },
        skip: (page - 1) * size,
        take: size,
      });

      const total = await db.news.count({
        where: { status: 1 },
      });

      return {
        data: await Promise.all(news.map(async (newsItem) => {
          const category = await db.news_category.findFirst({
            where: { id: newsItem.news_category_id },
          });

          return {
            ...newsItem,
            id: Number(newsItem.id),
            news_category_id: Number(newsItem.news_category_id),
            news_category_name: category ? language === "vi" ? category.vi_name : category.en_name : "",
          };
        })),
        total,
      };
    },

    async getByCategory(params: { language: string; news_category_id: number; size?: number; page?: number }) {
      const { language, news_category_id, size = 10, page = 1 } = params;

      const news = await db.news.findMany({
        where: { status: 1, news_category_id },
        orderBy: { id: 'desc' },
        skip: (page - 1) * size,
        take: size,
      });

      const category = await db.news_category.findFirst({
        where: { id: news_category_id },
      });

      return {
        data: news.map((newsItem) => ({
          ...newsItem,
          id: Number(newsItem.id),
          news_category_id: Number(newsItem.news_category_id),
          news_category_name: category ? language === "vi" ? category.vi_name : category.en_name : "",
        })),
        total: news.length,
      };
    },

    async getBySlug(params: { language: string; slug: string }) {
      const { language, slug } = params;

      const news = await db.news.findFirst({
        where: { slug, status: 1 },
      });

      if (!news) return null;

      const category = await db.news_category.findFirst({
        where: { id: news.news_category_id },
      });

      return {
        ...news,
        id: Number(news.id),
        news_category_id: Number(news.news_category_id),
        news_category_name: category ? language === "vi" ? category.vi_name : category.en_name : "",
      };
    },

    async search(params: { language: string; name: string; size?: number; page?: number }) {
      const { language, name, size = 10, page = 1 } = params;

      const titleField = language === "vi" ? "vi_title" : "en_title";
      const contentField = language === "vi" ? "vi_content" : "en_content";

      const searchCondition = {
        OR: [
          { [titleField]: { contains: name } },
          { [contentField]: { contains: name } }
        ]
      };

      const news = await db.news.findMany({
        where: {
          AND: [
            { status: 1 },
            searchCondition
          ]
        },
        orderBy: { id: 'desc' },
        skip: (page - 1) * size,
        take: size,
      });

      const total = await db.news.count({
        where: {
          AND: [
            { status: 1 },
            searchCondition
          ]
        }
      });

      const data = await Promise.all(news.map(async (newsItem) => {
        const category = await db.news_category.findFirst({
          where: { id: newsItem.news_category_id },
        });

        return {
          ...newsItem,
          id: Number(newsItem.id),
          news_category_id: Number(newsItem.news_category_id),
          news_category_name: category ? language === "vi" ? category.vi_name : category.en_name : "",
          title: language === "vi" ? newsItem.vi_title : newsItem.en_title,
          content: language === "vi" ? newsItem.vi_content : newsItem.en_content,
          description: language === "vi" ? newsItem.vi_description : newsItem.en_description,
        };
      }));

      const lastPage = Math.ceil(total / size);

      return {
        data,
        total,
        per_page: size,
        current_page: page,
        last_page: lastPage
      };
    }
  }
}
