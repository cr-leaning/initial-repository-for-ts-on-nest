export interface SampleService {
  getSampleData(key: string): Promise<string>;
}
