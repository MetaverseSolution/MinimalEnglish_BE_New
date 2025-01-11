import { CoreSystemConfigEntity } from '@domain/entities';

export interface CoreSystemConfigsRepository {
  website(): Promise<CoreSystemConfigEntity[] | []>;
  registration(): Promise<CoreSystemConfigEntity[] | []>;
}
