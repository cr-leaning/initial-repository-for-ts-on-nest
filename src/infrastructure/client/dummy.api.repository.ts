/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Logger } from '@nestjs/common';
import { DummyRepository } from '../interface/client/dummy.infrastracture.interface';
// import {SuperAgentStatic} from 'superagent';
import * as superagent from 'superagent';
import { DummyApiResponse } from './response/dummy.response';
import { CreateDummyApiRequest } from './request/create.dummy.api.request';
import { ApiClientException } from '../../exception/apiclient.exception';
import { CreateDummyApiResponse } from './response/create.dummy.response';
// const got = await import('./got.js')

@Injectable()
export class DummyApiRepositoryImpl implements DummyRepository {
  private readonly logger = new Logger();
  async store(request: CreateDummyApiRequest): Promise<CreateDummyApiResponse> {
    return await superagent
      .post('http://localhost:4000/dummy')
      .set('X-API-Key', 'test')
      .set('Accept', 'application/json')
      .send(request)
      .then((res) => {
        this.logger.log(res.body);
        return res.body as CreateDummyApiResponse;
      });
  }
  async get(id: number): Promise<DummyApiResponse> {
    this.logger.log('SampleApiRepositoryImpl :%s', id);
    return await superagent
      .get('http://localhost:4000/dummy')
      .set('X-API-Key', 'test')
      .set('Accept', 'application/json')
      .query({ key: id })
      .then((res) => {
        this.logger.log(res);
        return JSON.parse(JSON.stringify(res.body)) as DummyApiResponse;
      })
      .catch((reason) => {
        throw new ApiClientException(reason);
      });
  }
}
