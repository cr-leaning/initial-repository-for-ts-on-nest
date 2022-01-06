/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Controller,
  Get,
  Query,
  Param,
  Inject,
  Logger,
  Post,
  Body,
} from '@nestjs/common';
import { SampleApplication } from '../interface/applications/sample.application.interface';
import { SAMPLE_TYPES } from '../interface/types';
import { CreateSampleRequest } from './request/create.sample.request';
import { SampleResponse } from './response/sample.response';

@Controller('sample')
export class SampleController {
  private readonly logger = new Logger();

  constructor(
    @Inject(SAMPLE_TYPES.applications.SampleApplication)
    private readonly sampleApplication: SampleApplication,
  ) {}

  @Get()
  getSampleData(@Query('key') key: number) {
    this.logger.log({ 'sample key': key });
    this.logger.log('sample key:%s', key);
    return this.sampleApplication.getSampleData(key).then((res) => res);
  }

  @Post()
  store(@Body() request: CreateSampleRequest) {
    return new SampleResponse({
      id: 1,
      name: request.name,
      comment: request.comment,
      isValid: request.isValid,
    });
  }
}
