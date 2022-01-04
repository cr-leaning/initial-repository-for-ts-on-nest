/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Query, Param, Inject, Logger } from '@nestjs/common';
import { SampleApplication } from '../interface/applications/sample.application.interface';
import { SAMPLE_TYPES } from '../interface/types';

@Controller('sample')
export class SampleController {
  private readonly logger = new Logger();

  constructor(
    @Inject(SAMPLE_TYPES.applications.SampleApplication)
    private readonly sampleApplication: SampleApplication,
  ) {}

  @Get()
  getSampleData(@Query('key') key: string) {
    this.logger.log({ 'sample key': key });
    this.logger.log('sample key:%s', key);
    return this.sampleApplication.getSampleData(key).then((res) => res);
  }

  @Get(':id')
  getSampleDataById(@Param('id') id: string, @Query('key') key: string) {
    return this.sampleApplication.getSampleData(id + key).then((res) => res);
  }
}
