import { FastifyRequest } from 'fastify';

import { makeStudentResultUseCases } from '@application/student-result';
import ResponseBase from '@application/common/response-base';

export default async function studentResultRoutes(fastify: FastifyRouteInstance) {
  const studentResult = makeStudentResultUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'GET',
    url: '/api/student-result/all',
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
                  id: { type: 'integer', nullable: true },
                  class_name: { type: 'string', nullable: true },
                  name: { type: 'string', nullable: true },
                  description: { type: 'string', nullable: true },
                  result_image: { type: 'string' },
                  order: { type: 'integer', nullable: true },
                  status: { type: 'integer' },
                  created_at: { type: 'string', format: 'date-time', nullable: true },
                  updated_at: { type: 'string', format: 'date-time', nullable: true },
                  created_by: { type: 'string', nullable: true },
                  updated_by: { type: 'string', nullable: true },
                },
              },
            },
            message: { type: 'string', example: 'Student result fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['student-results'],
    },
    async handler(
      req: FastifyRequest,
      res
    ) {
      try {
        const studentResultList = await studentResult.queries.listStudentResults();

        const response = ResponseBase.formatBaseResponse(
          200,
          studentResultList,
          'Student result fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch student result',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
