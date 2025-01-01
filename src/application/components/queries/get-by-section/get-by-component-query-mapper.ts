import { ComponentDTO } from "@domain/dtos/component";
import { ComponentEntity } from "@domain/entities";

export function map(component: ComponentEntity, language: string): ComponentDTO {
  return {
    id: component.id?.toString() || '',
    image: component.image || '',
    image_2: component.image_2 || '',
    image_3: component.image_3 || '',
    image_4: component.image_4 || '',
    image_5: component.image_5 || '',
    image_6: component.image_6 || '',
    image_7: component.image_7 || '',
    title: language === 'vi' ? component.vi_title : component.en_title,
    content: language === 'vi' ? component?.vi_content || '' : component?.en_content || '',
    order: component.order || null,
    status: component.status,
    created_at: component.created_at ? component.created_at.toISOString() : null,
    updated_at: component.updated_at ? component.updated_at.toISOString() : null,
    created_by: component.created_by || null,
    updated_by: component.updated_by || null,
  };
}
