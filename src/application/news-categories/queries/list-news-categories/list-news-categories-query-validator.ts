import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { ListNewsCategoriesQuery } from './list-news-categories-query';

export async function validate(query: ListNewsCategoriesQuery) {
  try {
    const schema: z.ZodType<ListNewsCategoriesQuery> = z.object({
      language: z.string(),
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
