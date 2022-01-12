import { CreateDummyApiRequest } from 'src/infrastructure/client/request/create.dummy.api.request';
import { CreateDummyApiResponse } from 'src/infrastructure/client/response/create.dummy.response';
import { DummyApiResponse } from 'src/infrastructure/client/response/dummy.response';

export interface DummyRepository {
  get(id: number): Promise<DummyApiResponse>;
  store(modle: CreateDummyApiRequest): Promise<CreateDummyApiResponse>;
}
