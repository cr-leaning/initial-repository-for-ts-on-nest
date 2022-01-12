import { SampleData } from '../../domain/sample.domain';

export interface SampleApplication {
  getSampleData(key: number): Promise<SampleData>;
  storeSampleData(model: SampleData): Promise<SampleData>;
}
