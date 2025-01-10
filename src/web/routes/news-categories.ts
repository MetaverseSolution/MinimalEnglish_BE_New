import { FastifyRequest } from 'fastify';

import { makeNewsCategoriesUseCases } from '@application/news-categories';
import { ListNewsCategoriesQuery } from '@application/news-categories/queries/list-news-categories';

import ResponseBase from '@application/common/response-base';

export default async function newsCategoryRoutes(fastify: FastifyRouteInstance) {
  const newsCategories = makeNewsCategoriesUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'POST',
    url: '/api/news-category/all',
    schema: {
      body: {
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
                  description: { type: 'string' },
                  order: { type: 'integer' },
                  status: { type: 'integer' },
                  created_at: { type: 'string', format: 'date-time' },
                  updated_at: { type: 'string', format: 'date-time' },
                  created_by: { type: 'string' },
                  updated_by: { type: 'string' },
                },
              },
            },
            message: { type: 'string', example: 'Class fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['new-categories'],
    },
    async handler(
      req: FastifyRequest<{ Body: ListNewsCategoriesQuery }>,
      res
    ) {
      try {
        const data = await newsCategories.queries.list({
          language: req.body.language,
        });

        const response = ResponseBase.formatBaseResponse(
          200,
          data,
          'News categories fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch new categories',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
