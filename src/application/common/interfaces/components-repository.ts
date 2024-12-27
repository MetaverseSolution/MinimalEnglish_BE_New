import { Component } from '@domain/entities';

export interface ComponentsRepository {
  getBySection(parameters: { language: string, section_id: string }): Promise<Component | null>;
}
