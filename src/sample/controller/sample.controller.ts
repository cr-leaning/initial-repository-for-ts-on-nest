/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Controller,
  Get,
  Query,
  Inject,
  Logger,
  Post,
  Body,
} from '@nestjs/common';
import { fromRequest } from '../domain/sample.domain';
import { SampleApplication } from '../interface/applications/sample.application.interface';
import { SAMPLE_TYPES } from '../interface/types';
import { CreateSampleRequest } from './request/create.sample.request';
import { fromModel } from './response/sample.response';

@Controller('sample')
export class SampleController {
  private readonly logger = new Logger(SampleController.name);

  constructor(
    @Inject(SAMPLE_TYPES.applications.SampleApplication)
    private readonly sampleApplication: SampleApplication,
  ) {}

  @Get()
  async get(@Query('key') key: number) {
    this.logger.log({ 'sample key': key });
    this.logger.log('sample key:%s', key);
    return this.sampleApplication
      .getSampleData(key)
      .then((res) => fromModel(res));
  }

  @Post()
  async store(@Body() request: CreateSampleRequest) {
    return this.sampleApplication
      .storeSampleData(fromRequest(request))
      .then((res) => fromModel(res));
  }
}
