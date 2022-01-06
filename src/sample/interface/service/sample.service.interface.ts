import { SampleData } from '../../domain/sample.domain';

export interface SampleService {
  getSampleData(key: number): Promise<SampleData>;
}
