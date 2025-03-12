import { NewsDTO } from "@domain/dtos/news";
import { NewsEntity } from "@domain/entities";

export function map(news: NewsEntity, language: string): NewsDTO {
  return {
    id: news.id?.toString() || '',
    news_category_id: news.news_category_id,
    news_category_name: news.news_category_name,
    slug: news.slug,
    image: news.image || '',
    read_time: news.read_time || 1,
    title: language === 'vi' ? news.vi_title || '' : news.en_title || '',
    description: language === 'vi' ? news.vi_description || '' : news.en_description || '',
    content: language === 'vi' ? news.vi_content || '' : news.en_content || '',
    order: news.order || null,
    status: news.status,
    created_at: news.created_at ? news.created_at.toISOString() : null,
    updated_at: news.updated_at ? news.updated_at.toISOString() : null,
    created_by: news.created_by || null,
    updated_by: news.updated_by || null,
  };
}
