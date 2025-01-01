import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { ListHightlightClassesQuery } from './list-highlight-classes-query';

export async function validate(query: ListHightlightClassesQuery) {
  try {
    const schema: z.ZodType<ListHightlightClassesQuery> = z.object({
      language: z.string(),
      size: z.number().optional(),
      page: z.number().optional()
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
