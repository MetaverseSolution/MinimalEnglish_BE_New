import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { ListPagesQuery } from './list-pages-query';

export async function validate(query: ListPagesQuery) {
  try {
    const schema: z.ZodType<ListPagesQuery> = z.object({
      language: z.string()
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
