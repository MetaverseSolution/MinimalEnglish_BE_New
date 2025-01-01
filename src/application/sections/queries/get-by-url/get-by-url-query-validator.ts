import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { GetByUrlQuery } from './get-by-url-query';

export async function validate(query: GetByUrlQuery) {
  try {
    const schema: z.ZodType<GetByUrlQuery> = z.object({
      language: z.string(),
      url: z.string()
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
