import { CreateSampleApiRequest } from 'src/infrastructure/client/request/create.sample.api.request';
import { SampleApiResponse } from 'src/infrastructure/client/response/sample.response';

export interface SampleRepository {
  get(id: number): Promise<SampleApiResponse>;
  store(modle: CreateSampleApiRequest): Promise<number>;
}
