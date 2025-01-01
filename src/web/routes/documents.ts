import { FastifyRequest } from 'fastify';

import { makeDocumentsUseCases } from '@application/documents';
import ResponseBase from '@application/common/response-base';

interface ListDocumentsQuery {
  language: string;
  document_type_id: number;
  size?: number;
  page?: number;
}

export default async function documentRoutes(fastify: FastifyRouteInstance) {
  const documents = makeDocumentsUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'POST',
    url: '/api/document/get-by-document-type',
    schema: {
      body: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
          section_id: { type: 'string', description: 'ID of pages database' }
        },
        required: ['language', 'section_id'],
      },
      response: {
        200: {
          type: 'object',
          properties: {
            status_code: { type: 'integer', example: 200 },
            data: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'integer' },
                  title: { type: 'string' },
                  content: { type: 'string' },
                  image: { type: 'string' },
                  image_2: { type: 'string' },
                  image_3: { type: 'string' },
                  image_4: { type: 'string' },
                  image_5: { type: 'string' },
                  image_6: { type: 'string' },
                  image_7: { type: 'string' },
                  order: { type: 'integer' },
                  status: { type: 'integer' },
                  created_at: { type: 'string', format: 'date-time' },
                  updated_at: { type: 'string', format: 'date-time' },
                  created_by: { type: 'string' },
                  updated_by: { type: 'string' },
                },
              },
            },
            message: { type: 'string', example: 'Components fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['sections'],
    },
    async handler(
      req: FastifyRequest<{ Body: ListDocumentsQuery }>,
      res
    ) {
      try {
        const { data, total, per_page, current_page, last_page } = await documents.queries.getByDocumentType({
          language: req.body.language,
          document_type_id: req.body.document_type_id,
          size: req.body.size,
          page: req.body.page,
        });

        const response = ResponseBase.formatPaginationResponse(
          200,
          data,
          total ?? 0,
          per_page ?? 0,
          current_page ?? 0,
          last_page ?? 0,
          'Document types fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch document types',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
