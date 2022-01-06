import { SampleData } from '../../../sample/domain/sample.domain';

export interface SampleRepository {
  get(id: number): Promise<SampleData>;
  store(modle: SampleData): Promise<number>;
}
