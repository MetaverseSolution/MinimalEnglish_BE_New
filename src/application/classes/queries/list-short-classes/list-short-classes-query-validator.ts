import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { ListShortClassesQuery } from './list-short-classes-query';

export async function validate(query: ListShortClassesQuery) {
  try {
    const schema: z.ZodType<ListShortClassesQuery> = z.object({
      language: z.string(),
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
