import { FastifyRequest } from 'fastify';

import { makeCoreSystemConfigsUseCases } from '@application/core-system-config';
import ResponseBase from '@application/common/response-base';

export default async function coreSystemConfigsRoutes(fastify: FastifyRouteInstance) {
  const coreSystemConfigs = makeCoreSystemConfigsUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'GET',
    url: '/api/config/registration',
    schema: {
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
                  group: { type: 'string' },
                  type: { type: 'string' },
                  value: { type: 'string' },
                  image: { type: 'string' },
                  description_vi: { type: 'string' },
                  description_en: { type: 'string' },
                  block_delete: { type: 'integer' },
                  order: { type: 'integer' },
                  status: { type: 'integer' },
                  created_at: { type: 'string', format: 'date-time' },
                  updated_at: { type: 'string', format: 'date-time' },
                  created_by: { type: 'string' },
                  updated_by: { type: 'string' },
                },
              },
            },
            message: { type: 'string', example: 'core system configsfetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['core-system-configs'],
    },
    async handler(
      req: FastifyRequest,
      res
    ) {
      try {
        const coreRegistrationSystemConfigs = await coreSystemConfigs.queries.getRegistration();

        const response = ResponseBase.formatBaseResponse(
          200,
          coreRegistrationSystemConfigs,
          'Core system configs fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch lecture types ',
        );

        res.status(400).send(errorResponse);
      }
    },
  });

  fastify.route({
    method: 'GET',
    url: '/api/config/website',
    schema: {
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
                  group: { type: 'string' },
                  type: { type: 'string' },
                  value: { type: 'string' },
                  image: { type: 'string' },
                  description_vi: { type: 'string' },
                  description_en: { type: 'string' },
                  block_delete: { type: 'integer' },
                  order: { type: 'integer' },
                  status: { type: 'integer' },
                  created_at: { type: 'string', format: 'date-time' },
                  updated_at: { type: 'string', format: 'date-time' },
                  created_by: { type: 'string' },
                  updated_by: { type: 'string' },
                },
              },
            },
            message: { type: 'string', example: 'Lecture types fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['core-system-configs'],
    },
    async handler(
      req: FastifyRequest,
      res
    ) {
      try {
        const coreWebsiteSystemConfigs = await coreSystemConfigs.queries.getWebsite();

        const response = ResponseBase.formatBaseResponse(
          200,
          coreWebsiteSystemConfigs,
          'Core system configs fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch core system configs',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
