import { ConfigSystem } from '@domain/entities';

export interface ConfigSystemsRepository {
  website(): Promise<{ data: Array<ConfigSystem> }>;
  registration(): Promise<{ data: Array<ConfigSystem> }>;
}
