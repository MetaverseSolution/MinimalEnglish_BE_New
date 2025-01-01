import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { GetByPageQuery } from './get-by-page-query';

export async function validate(query: GetByPageQuery) {
  try {
    const schema: z.ZodType<GetByPageQuery> = z.object({
      language: z.string(),
      page_id: z.string()
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
