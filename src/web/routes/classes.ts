import { FastifyRequest } from 'fastify';

import { makeClassessUseCases } from '@application/classes';
import { ListHightlightClassesQuery } from '@application/classes/queries/list-highlight-classes';
import { GetClassByIdQuery } from '@application/classes/queries/get-class-by-id';
import { ListShortClassesQuery } from '@application/classes/queries/list-short-classes';

import ResponseBase from '@application/common/response-base';

export default async function classRoutes(fastify: FastifyRouteInstance) {
  const classes = makeClassessUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'POST',
    url: '/api/class/high-light',
    schema: {
      body: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
          size: { type: 'number', description: 'Size number of records (e.g., 10.)' },
          page: { type: 'number', description: 'Page number of database (e.g., 1.)' }
        },
        required: ['language', 'size', 'page'],
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
                  content: { type: 'string' },
                  description: { type: 'string' },
                  image: { type: 'string' },
                  order: { type: 'integer' },
                  status: { type: 'integer' },
                  created_at: { type: 'string', format: 'date-time' },
                  updated_at: { type: 'string', format: 'date-time' },
                  created_by: { type: 'string' },
                  updated_by: { type: 'string' },
                },
              },
            },
            total: { type: 'integer', },
            per_page: { type: 'integer', },
            current_page: { type: 'integer', },
            last_page: { type: 'integer', },
            message: { type: 'string', example: 'Classes fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['classes'],
    },
    async handler(
      req: FastifyRequest<{ Body: ListHightlightClassesQuery }>,
      res
    ) {
      try {
        const { data, total, per_page, current_page, last_page } = await classes.queries.listHightlightClasses({
          language: req.body.language,
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
          'Classes fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatPaginationResponse(
          400,
          null,
          0,
          0,
          0,
          0,
          'Failed to fetch classes',
        );

        res.status(400).send(errorResponse);
      }
    },
  });

  fastify.route({
    method: 'POST',
    url: '/api/class/get-by-id',
    schema: {
      body: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
          id: { type: 'number', description: 'Id number of class (e.g., 1.)' },
        },
        required: ['language', 'id'],
      },
      response: {
        200: {
          type: 'object',
          properties: {
            status_code: { type: 'integer', example: 200 },
            data: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                content: { type: 'string' },
                description: { type: 'string' },
                image: { type: 'string' },
                order: { type: 'integer' },
                status: { type: 'integer' },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' },
                created_by: { type: 'string' },
                updated_by: { type: 'string' },
              },
            },
            message: { type: 'string', example: 'Class fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['classes'],
    },
    async handler(
      req: FastifyRequest<{ Body: GetClassByIdQuery }>,
      res
    ) {
      try {
        const data = await classes.queries.getClassById({
          language: req.body.language,
          id: String(req.body.id),
        });

        const response = ResponseBase.formatBaseResponse(
          200,
          data,
          'Class fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch classes',
        );

        res.status(400).send(errorResponse);
      }
    },
  });

  fastify.route({
    method: 'POST',
    url: '/api/class/all-short',
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
                  order: { type: 'integer' },
                },
              },
            },
            message: { type: 'string', example: 'Class fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['classes'],
    },
    async handler(
      req: FastifyRequest<{ Body: ListShortClassesQuery }>,
      res
    ) {
      try {
        const data = await classes.queries.listShortClasses({
          language: req.body.language,
        });

        const response = ResponseBase.formatBaseResponse(
          200,
          data,
          'Class fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch classes',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
