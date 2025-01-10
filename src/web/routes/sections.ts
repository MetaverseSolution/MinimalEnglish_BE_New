import { FastifyRequest } from 'fastify';

import { makeSectionsUseCases } from '@application/sections';
import { GetByPageQuery } from '@application/sections/queries/get-by-page';
import { GetByUrlQuery } from '@application/sections/queries/get-by-url';
import ResponseBase from '@application/common/response-base';

export default async function sectionRoutes(fastify: FastifyRouteInstance) {
  const sections = makeSectionsUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'POST',
    url: '/api/section/get-by-page',
    schema: {
      body: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
          page_id: { type: 'string', description: 'ID of pages database' }
        },
        required: ['language', 'page_id'],
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
                  image: { type: 'string' },
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
            message: { type: 'string', example: 'Sections fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['sections'],
    },
    async handler(
      req: FastifyRequest<{ Body: GetByPageQuery }>,
      res
    ) {
      try {
        const pagesList = await sections.queries.listSectionsByPage({
          language: req.body.language,
          page_id: req.body.page_id
        });

        const response = ResponseBase.formatBaseResponse(
          200,
          pagesList,
          'Sections fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch sections',
        );

        res.status(400).send(errorResponse);
      }
    },
  });

  fastify.route({
    method: 'POST',
    url: '/api/section/get-by-page-url',
    schema: {
      body: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
          url: { type: 'string', description: 'Url of pages database' },
        },
        required: ['language', 'url'],
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
                  image: { type: 'string' },
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
            message: { type: 'string', example: 'Sections fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['sections'],
    },
    async handler(
      req: FastifyRequest<{ Body: GetByUrlQuery }>,
      res
    ) {
      try {
        const pagesList = await sections.queries.listSectionsByPageUrl({
          language: req.body.language,
          url: req.body.url
        });

        const response = ResponseBase.formatBaseResponse(
          200,
          pagesList,
          'Sections fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch sections',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
