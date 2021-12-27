export interface SampleApplication {
  getSampleData(key: string): Promise<string>;
}
