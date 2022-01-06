export interface SampleApplication {
  getSampleData(key: number): Promise<string>;
}
