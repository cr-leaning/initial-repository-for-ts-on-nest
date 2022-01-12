import { Injectable } from '@nestjs/common';
import { CreateDummyRequest } from '../contorller/request/create.dummy.request';
import { DummyResponse } from '../contorller/response/dummy.response';

@Injectable()
export class DummyService {
  async getData(key: number): Promise<DummyResponse> {
    return new DummyResponse({
      id: key,
      name: 'dummyData',
      isValid: true,
      comment: 'dummy data comment',
    });
  }

  async storeData(request: CreateDummyRequest): Promise<number> {
    return Math.floor(Math.random() * 1001);
  }
}
