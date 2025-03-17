import { FastifyRequest } from 'fastify';

import { makeNewsUseCases } from '@application/news';
import { GetRelatedQuery } from '@application/news/queries/get-related';
import { GetByCategoryQuery } from '@application/news/queries/get-by-category';
import { GetBySlugQuery } from '@application/news/queries/get-by-slug';
import ResponseBase from '@application/common/response-base';
import { SearchNewsQuery } from '@application/news/queries/search';

export default async function newsRoutes(fastify: FastifyRouteInstance) {
  const news = makeNewsUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'POST',
    url: '/api/news/get-related',
    schema: {
      body: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
          id: { type: 'number', description: 'Id of records (e.g., 10.)' },
          news_category_id: { type: 'number', description: 'News category id of records (e.g., 10.)' },
          size: { type: 'number', description: 'Size number of records (e.g., 10.)' },
          page: { type: 'number', description: 'Page number of database (e.g., 1.)' }
        },
        required: ['language', 'news_category_id', 'id', 'size', 'page'],
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
                  news_category_id: { type: 'integer' },
                  news_category_name: { type: 'string' },
                  slug: { type: 'string' },
                  read_time: { type: 'integer' },
                  title: { type: 'string' },
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
      tags: ['news'],
    },
    async handler(
      req: FastifyRequest<{ Body: GetRelatedQuery }>,
      res
    ) {
      try {
        const { data, total, per_page, current_page, last_page } = await news.queries.getRelated({
          language: req.body.language,
          news_category_id: req.body.news_category_id,
          id: req.body.id,
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
          'News related fetched successfully',
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
          'Failed to fetch news related',
        );

        res.status(400).send(errorResponse);
      }
    },
  });

  fastify.route({
    method: 'POST',
    url: '/api/news/get-by-category',
    schema: {
      body: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
          news_category_id: { type: 'number', description: 'News category id of records (e.g., 10.)' },
          size: { type: 'number', description: 'Size number of records (e.g., 10.)' },
          page: { type: 'number', description: 'Page number of database (e.g., 1.)' }
        },
        required: ['language', 'news_category_id', 'size', 'page'],
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
                  news_category_id: { type: 'integer' },
                  news_category_name: { type: 'string' },
                  slug: { type: 'string' },
                  read_time: { type: 'integer' },
                  title: { type: 'string' },
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
      tags: ['news'],
    },
    async handler(
      req: FastifyRequest<{ Body: GetByCategoryQuery }>,
      res
    ) {
      try {
        const { data, total, per_page, current_page, last_page } = await news.queries.getByCategory({
          language: req.body.language,
          news_category_id: req.body.news_category_id,
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
          'News by category fetched successfully',
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
          'Failed to fetch news by category',
        );

        res.status(400).send(errorResponse);
      }
    },
  });

  fastify.route({
    method: 'POST',
    url: '/api/news/get-by-slug',
    schema: {
      body: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
          slug: { type: 'string', description: 'Slug of news (e.g., abc-xyz)' },
        },
        required: ['language', 'slug'],
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
                news_category_id: { type: 'integer' },
                news_category_name: { type: 'string' },
                slug: { type: 'string' },
                read_time: { type: 'integer' },
                title: { type: 'string' },
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
      tags: ['news'],
    },
    async handler(
      req: FastifyRequest<{ Body: GetBySlugQuery }>,
      res
    ) {
      try {
        const data = await news.queries.getBySlug({
          language: req.body.language,
          slug: req.body.slug
        });

        const response = ResponseBase.formatBaseResponse(
          200,
          data,
          'News get by slug successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch news get by slug',
        );

        res.status(400).send(errorResponse);
      }
    },
  });

  fastify.route({
    method: 'POST',
    url: '/api/news/search',
    schema: {
      body: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
          name: { type: 'string', description: 'Search keyword for news title or content' },
          size: { type: 'number', description: 'Size number of records (e.g., 10)' },
          page: { type: 'number', description: 'Page number (e.g., 1)' }
        },
        required: ['language', 'name', 'size', 'page'],
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
                  news_category_id: { type: 'integer' },
                  news_category_name: { type: 'string' },
                  slug: { type: 'string' },
                  read_time: { type: 'integer' },
                  title: { type: 'string' },
                  content: { type: 'string' },
                  description: { type: 'string' },
                  image: { type: 'string' },
                  order: { type: 'integer' },
                  status: { type: 'integer' },
                  type: { type: 'integer' },
                  created_at: { type: 'string', format: 'date-time' },
                  updated_at: { type: 'string', format: 'date-time' },
                  created_by: { type: 'string' },
                  updated_by: { type: 'string' },
                },
              },
            },
            total: { type: 'integer' },
            per_page: { type: 'integer' },
            current_page: { type: 'integer' },
            last_page: { type: 'integer' },
            message: { type: 'string', example: 'News searched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['news'],
    },
    async handler(
      req: FastifyRequest<{ Body: SearchNewsQuery }>,
      res
    ) {
      try {
        const { data, total, per_page, current_page, last_page } = await news.queries.search({
          language: req.body.language,
          name: req.body.name,
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
          'News searched successfully',
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
          'Failed to search news',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
