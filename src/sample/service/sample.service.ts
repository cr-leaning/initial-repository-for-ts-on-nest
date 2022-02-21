/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable, Logger } from '@nestjs/common';
import { DummyRepository } from '../../infrastructure/interface/client/dummy.infrastracture.interface';
import { INFRASTRACTURE_TYPES } from '../../infrastructure/interface/types';
import {
  fromApiResponse,
  fromCreateApiResponse,
  SampleData,
} from '../domain/sample.domain';
import { SampleService } from '../interface/service/sample.service.interface';

@Injectable()
export class SampleServiceImpl implements SampleService {
  private readonly logger = new Logger(SampleServiceImpl.name);
  constructor(
    @Inject(INFRASTRACTURE_TYPES.repository.DummyRepository)
    private readonly sampleReposiroty: DummyRepository, // private readonly logger: CustomLoggerService,
  ) {}
  async storeSampleData(model: SampleData): Promise<SampleData> {
    this.logger.log('before sampleReposiroty.store');
    const s = JSON.stringify(model);
    this.logger.log('sample service model: %s', s);
    return this.sampleReposiroty
      .store(model)
      .then((res) => fromCreateApiResponse(res));
  }

  async getSampleData(key: number): Promise<SampleData> {
    this.logger.log('sample service key:%s', key);
    return this.sampleReposiroty.get(key).then((res) => fromApiResponse(res));
  }
}
