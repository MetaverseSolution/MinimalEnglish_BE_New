import { FeedbackDTO } from "@domain/dtos/feedback";
import { FeedbackEntity } from "@domain/entities";

export function map(feedback: FeedbackEntity, language: string): FeedbackDTO {
  return {
    id: feedback.id?.toString() || '',
    name: feedback.name ?? null,
    address: feedback.address ?? null,
    content: language === 'vi' ? feedback.vi_content || '' : feedback.en_content || '',
    avatar: feedback.avatar ?? null,
    image: feedback.image ?? null,
    image_2: feedback.image_2 ?? null,
    image_3: feedback.image_3 ?? null,
    image_4: feedback.image_4 ?? null,
    image_5: feedback.image_5 ?? null,
    image_6: feedback.image_6 ?? null,
    order: feedback.order ?? null,
    status: feedback.status ?? 0,
    created_at: feedback.created_at?.toISOString() ?? null,
    updated_at: feedback.updated_at?.toISOString() ?? null,
    created_by: feedback.created_by ?? null,
    updated_by: feedback.updated_by ?? null,
  };
}
