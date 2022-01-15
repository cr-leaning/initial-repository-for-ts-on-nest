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
import { EnvDummyApiService } from 'src/env/service/env.dummpyapi.service';
// const got = await import('./got.js')
const X_API_KEY = 'X-API-Key';
const ACCEPT = 'accept';

@Injectable()
export class DummyApiRepositoryImpl implements DummyRepository {
  private readonly logger = new Logger();
  constructor(private readonly dummyEnv: EnvDummyApiService) {}

  async store(request: CreateDummyApiRequest): Promise<CreateDummyApiResponse> {
    return await superagent
      .post(`${this.dummyEnv.Url}${this.dummyEnv.Endpoint}`)
      .set(X_API_KEY, this.dummyEnv.ApiKey)
      .set(ACCEPT, this.dummyEnv.Accept)
      .send(request)
      .then((res) => {
        this.logger.log(res.body);
        return res.body as CreateDummyApiResponse;
      });
  }

  async get(id: number): Promise<DummyApiResponse> {
    this.logger.log('SampleApiRepositoryImpl :%s', id);
    return await superagent
      .get(`${this.dummyEnv.Url}${this.dummyEnv.Endpoint}`)
      .set(X_API_KEY, this.dummyEnv.ApiKey)
      .set(ACCEPT, this.dummyEnv.Accept)
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
