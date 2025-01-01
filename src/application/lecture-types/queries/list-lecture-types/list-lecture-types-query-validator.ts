import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { ListLectureTypesQuery } from './list-lecture-types-query';

export async function validate(query: ListLectureTypesQuery) {
  try {
    const schema: z.ZodType<ListLectureTypesQuery> = z.object({
      language: z.string()
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
