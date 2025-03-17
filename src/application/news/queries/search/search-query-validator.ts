import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { SearchNewsQuery } from './search-query';

export async function validate(query: SearchNewsQuery) {
  try {
    const schema: z.ZodType<SearchNewsQuery> = z.object({
      language: z.string(),
      name: z.string(),
      size: z.number().optional(),
      page: z.number().optional(),
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
