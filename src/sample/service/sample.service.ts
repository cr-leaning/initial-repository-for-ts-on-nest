/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable, Logger } from '@nestjs/common';
import { SampleRepository } from '../../infrastructure/interface/client/sample.infrastracture.interface';
import { INFRASTRACTURE_TYPES } from '../../infrastructure/interface/types';
import { fromApiResponse, SampleData } from '../domain/sample.domain';
import { SampleService } from '../interface/service/sample.service.interface';

@Injectable()
export class SampleServiceImpl implements SampleService {
  private readonly logger = new Logger();
  constructor(
    @Inject(INFRASTRACTURE_TYPES.repository.SampleRepository)
    private readonly sampleReposiroty: SampleRepository, // private readonly logger: CustomLoggerService,
  ) {}
  async storeSampleData(model: SampleData): Promise<number> {
    this.logger.log('before sampleReposiroty.store');
    const s = JSON.stringify(model);
    this.logger.log('sample service model: %s', s);
    return this.sampleReposiroty.store(model).then((res) => res);
  }

  async getSampleData(key: number): Promise<SampleData> {
    this.logger.log('sample service key:%s', key);
    return this.sampleReposiroty.get(key).then((res) => fromApiResponse(res));
  }
}
