/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Logger } from '@nestjs/common';
import { SampleData } from 'src/sample/domain/sample.domain';
import { SampleRepository } from '../interface/client/sample.infrastracture.interface';
// import {SuperAgentStatic} from 'superagent';
import * as superagent from 'superagent';
// const got = await import('./got.js')

@Injectable()
export class SampleApiRepositoryImpl implements SampleRepository {
  private readonly logger = new Logger();
  async store(modle: SampleData): Promise<number> {
    throw new Error('Method not implemented.');
  }
  async get(id: number): Promise<SampleData> {
    this.logger.log('SampleApiRepositoryImpl :%s', id);
    return await superagent
      .get('http://localhost:3000/dummy')
      .query({ key: id })
      .then((res) => {
        return JSON.parse(res.body) as SampleData;
      });
    //   .catch((reason) => this.logger.log(reason))
  }
}
