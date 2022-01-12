/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { SampleData } from '../domain/sample.domain';
import { SampleApplication } from '../interface/applications/sample.application.interface';
import { SAMPLE_TYPES } from '../interface/types';
import { SampleServiceImpl } from '../service/sample.service';

@Injectable()
export class SampleApplicationImpl implements SampleApplication {
  constructor(
    @Inject(SAMPLE_TYPES.services.SampleService)
    private readonly sampleService: SampleServiceImpl,
  ) {}
  async storeSampleData(model: SampleData): Promise<SampleData> {
    return this.sampleService.storeSampleData(model);
  }

  async getSampleData(key: number): Promise<SampleData> {
    return this.sampleService.getSampleData(key);
  }
}
