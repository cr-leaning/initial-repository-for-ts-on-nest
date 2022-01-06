/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'typedoc';
import { SampleRepository } from '../../infrastructure/interface/client/sample.infrastracture.interface';
import { INFRASTRACTURE_TYPES } from '../../infrastructure/interface/types';
import { SampleData } from '../domain/sample.domain';
import { SampleService } from '../interface/service/sample.service.interface';

@Injectable()
export class SampleServiceImpl implements SampleService {
  private readonly logger = new Logger();
  constructor(
    @Inject(INFRASTRACTURE_TYPES.repository.SampleRepository)
    private readonly sampleReposiroty: SampleRepository,
  ) {}
  async getSampleData(key: number): Promise<SampleData> {
    this.logger.log('sample service key:%s', key);
    return this.sampleReposiroty.get(key);
  }
}
