import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { GetByLectureTypeQuery } from './get-by-lecture-type-query';

export async function validate(query: GetByLectureTypeQuery) {
  try {
    const schema: z.ZodType<GetByLectureTypeQuery> = z.object({
      language: z.string(),
      lecture_type_id: z.number(),
      size: z.number().optional(),
      page: z.number().optional(),
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
