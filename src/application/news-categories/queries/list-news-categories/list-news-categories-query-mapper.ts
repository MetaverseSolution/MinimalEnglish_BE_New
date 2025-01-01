import { NewsCategoryDTO } from "@domain/dtos/news-category";
import { NewsCategoryEntity } from "@domain/entities";

export function map(newsCategory: NewsCategoryEntity, language: string): NewsCategoryDTO {
  return {
    id: newsCategory.id?.toString() || '',
    name: language === 'vi' ? newsCategory.vi_name || '' : newsCategory.en_name || '',
    description: language === 'vi' ? newsCategory.vi_description || '' : newsCategory.en_description || '',
    order: newsCategory.order || null,
    status: newsCategory.status,
    created_at: newsCategory.created_at ? newsCategory.created_at.toISOString() : null,
    updated_at: newsCategory.updated_at ? newsCategory.updated_at.toISOString() : null,
    created_by: newsCategory.created_by || null,
    updated_by: newsCategory.updated_by || null,
  };
}
