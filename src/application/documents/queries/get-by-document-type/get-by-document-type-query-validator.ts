import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { GetByDocumentTypeQuery } from './get-by-document-type-query';

export async function validate(query: GetByDocumentTypeQuery) {
  try {
    const schema: z.ZodType<GetByDocumentTypeQuery> = z.object({
      language: z.string(),
      document_type_id: z.number(),
      size: z.number().optional(),
      page: z.number().optional(),
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
