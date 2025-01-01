import { FastifyRequest } from 'fastify';

import { makeComponentsUseCases } from '@application/components';
import ResponseBase from '@application/common/response-base';

interface ListComponentsByPageQuery {
  language: string
  section_id: string
}

export default async function componentRoutes(fastify: FastifyRouteInstance) {
  const components = makeComponentsUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'POST',
    url: '/api/component/get-by-section',
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
      req: FastifyRequest<{ Body: ListComponentsByPageQuery }>,
      res
    ) {
      try {
        const componentsList = await components.queries.listComponentsBySection({
          language: req.body.language,
          section_id: req.body.section_id
        });

        const response = ResponseBase.formatBaseResponse(
          200,
          componentsList,
          'Components fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch components',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
