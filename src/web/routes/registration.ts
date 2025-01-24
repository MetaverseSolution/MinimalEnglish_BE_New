import { FastifyRequest } from 'fastify';

import { makeRegistrationsUseCases } from '@application/registration/queires/create';
import { CreateRegistrationQuery } from '@application/registration/queires/create/create-registration-query';
import ResponseBase from '@application/common/response-base';

export default async function registrationRoutes(fastify: FastifyRouteInstance) {
  const registrations = makeRegistrationsUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'POST',
    url: '/api/registration',
    schema: {
      body: {
        type: 'object',
        properties: {
          full_name: { type: 'string', description: 'Full name of student' },
          phone_number: { type: 'string', description: 'Phone number of student' },
          email: { type: 'string', description: 'Email of student or their parents' },
          is_learn: { type: 'number', description: 'Are you learning IELTS before?' },
          type_class: { type: 'number', description: 'Do you want the type of classes?' },
        },
        required: ['full_name', 'phone_number', 'email', 'is_learn', 'type_class'],
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
              },
            },
            message: { type: 'string', example: 'Class fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['registrations'],
    },
    async handler(
      req: FastifyRequest<{ Body: CreateRegistrationQuery }>,
      res
    ) {
      try {
        const componentsList = await registrations.queries.create({
          full_name: req.body.full_name,
          phone_number: req.body.phone_number,
          email: req.body.email,
          is_learn: req.body.is_learn,
          type_class: req.body.type_class,
        });

        const response = ResponseBase.formatBaseResponse(
          200,
          componentsList,
          'Register successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Register failed',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
