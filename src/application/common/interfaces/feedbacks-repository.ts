import { FeedbackEntity } from '@domain/entities';

export interface FeedbacksRepository {
  list(params: {
    language: string;
    size?: number;
    page?: number
  }): Promise<{ data: Array<FeedbackEntity>, total: number } | { data: [], total: null }>;
}
