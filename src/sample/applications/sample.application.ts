/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { SampleApplication } from '../interface/applications/sample.application.interface';
import { SAMPLE_TYPES } from '../interface/types';
import { SampleServiceImpl } from '../service/sample.service';

@Injectable()
export class SampleApplicationImpl implements SampleApplication {
  constructor(
    @Inject(SAMPLE_TYPES.services.SampleService)
    private readonly sampleService: SampleServiceImpl,
  ) {}

  async getSampleData(key: string): Promise<string> {
    return this.sampleService
      .getSampleData(key)
      .then((res) => res + ' application');
  }
}
