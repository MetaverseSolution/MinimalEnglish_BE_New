import { FastifyRequest } from 'fastify';

import { makePagesUseCases } from '@application/pages';
import ResponseBase from '@application/common/response-base';

interface ListPagesQuerystring {
  language: string
}

export default async function pageRoutes(fastify: FastifyRouteInstance) {
  const pages = makePagesUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'GET',
    url: '/api/page/all',
    schema: {
      querystring: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
        },
        required: ['language'],
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
                  name: { type: 'string' },
                  url: { type: 'string' },
                  order: { type: 'integer' },
                  status: { type: 'integer' },
                  created_at: { type: 'string', format: 'date-time' },
                  updated_at: { type: 'string', format: 'date-time' },
                  created_by: { type: 'string' },
                  updated_by: { type: 'string' },
                },
              },
            },
            message: { type: 'string', example: 'Pages fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['pages'],
    },
    async handler(
      req: FastifyRequest<{ Querystring: ListPagesQuerystring }>,
      res
    ) {
      try {
        const pagesList = await pages.queries.listPages({
          language: req.query.language,
        });

        const response = ResponseBase.formatBaseResponse(
          200,
          pagesList,
          'Pages fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch pages',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
