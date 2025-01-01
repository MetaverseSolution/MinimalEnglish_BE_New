import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { GetRelatedQuery } from './get-related-query';

export async function validate(query: GetRelatedQuery) {
  try {
    const schema: z.ZodType<GetRelatedQuery> = z.object({
      language: z.string(),
      id: z.number(),
      news_category_id: z.number(),
      size: z.number().optional(),
      page: z.number().optional(),
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
