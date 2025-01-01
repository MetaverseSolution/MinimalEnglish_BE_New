import { PageDTO } from "@domain/dtos/page";
import { PageEntity } from "@domain/entities";

export function map(page: PageEntity, language: string): PageDTO {
  return {
    id: page.id?.toString() || '',
    name: language === 'vi' ? page.vi_name : page.en_name,
    url: page.url,
    order: page.order || null,
    status: page.status,
    created_at: page.created_at ? page.created_at.toISOString() : null,
    updated_at: page.updated_at ? page.updated_at.toISOString() : null,
    created_by: page.created_by || null,
    updated_by: page.updated_by || null,
  };
}
