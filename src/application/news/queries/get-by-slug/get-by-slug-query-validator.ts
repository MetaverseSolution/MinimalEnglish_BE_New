import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { GetBySlugQuery } from './get-by-slug-query';

export async function validate(query: GetBySlugQuery) {
  try {
    const schema: z.ZodType<GetBySlugQuery> = z.object({
      language: z.string(),
      slug: z.string()
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
