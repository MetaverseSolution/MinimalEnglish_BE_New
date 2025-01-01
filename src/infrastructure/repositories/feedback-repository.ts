import { FeedbacksRepository } from "@application/common/interfaces";

export function makeFeedbacksRepository({ db }: Dependencies): FeedbacksRepository {
  return {
    async list(params: { language: string; size?: number; page?: number }) {
      const { size = 10, page = 1 } = params;

      const feedbacks = await db.feedback.findMany({
        where: {
          status: 1,
        },
        orderBy: {
          order: 'asc',
        },
        skip: (page - 1) * size,
        take: size,
      });

      const total = await db.feedback.count({
        where: {
          status: 1,
        },
      });

      return {
        data: feedbacks.map((feedback) => ({
          ...feedback,
          id: Number(feedback.id),
        })),
        total,
      };
    },
  }
}
