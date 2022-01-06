import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Logger } from 'typedoc';
import { DummyService } from '../service/dummy.service';
import { CreateDummyRequest } from './request/create.dummy.request';
import { DummyResponse } from './response/dummy.response';

@Controller('dummy')
export class DummyController {
  private readonly logger = new Logger();
  constructor(private readonly appService: DummyService) {}

  @Get()
  get(@Query('key') key: number): DummyResponse {
    this.logger.log('key %s', key);
    return this.appService.getData(key);
  }

  @Post()
  store(@Body() request: CreateDummyRequest): number {
    return this.appService.storeData(request);
  }
}
