/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Logger } from '@nestjs/common';
import { SampleRepository } from '../interface/client/sample.infrastracture.interface';
// import {SuperAgentStatic} from 'superagent';
import * as superagent from 'superagent';
import { SampleApiResponse } from './response/sample.response';
import { CreateSampleApiRequest } from './request/create.sample.api.request';
// const got = await import('./got.js')

@Injectable()
export class SampleApiRepositoryImpl implements SampleRepository {
  private readonly logger = new Logger();
  async store(request: CreateSampleApiRequest): Promise<number> {
    return await superagent
      .post('http://localhost:4000/dummy')
      .send(JSON.stringify(request))
      .then((res) => {
        this.logger.log(JSON.stringify(res.body));
        return res.body;
      });
  }
  async get(id: number): Promise<SampleApiResponse> {
    this.logger.log('SampleApiRepositoryImpl :%s', id);
    return await superagent
      .get('http://localhost:4000/dummy')
      .query({ key: id })
      .then((res) => {
        this.logger.log(JSON.stringify(res.body));
        return JSON.parse(JSON.stringify(res.body)) as SampleApiResponse;
      });
  }
}
