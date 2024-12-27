import { Feedback } from '@domain/entities';

export interface FeedbacksRepository {
  list(): Promise<{ data: Array<Feedback> }>;
}
