import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { GetByCategoryQuery } from './get-by-category-query';

export async function validate(query: GetByCategoryQuery) {
  try {
    const schema: z.ZodType<GetByCategoryQuery> = z.object({
      language: z.string(),
      news_category_id: z.number(),
      size: z.number().optional(),
      page: z.number().optional(),
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
