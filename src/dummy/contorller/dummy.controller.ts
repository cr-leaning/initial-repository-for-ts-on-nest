import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { DummyService } from '../service/dummy.service';
import { CreateDummyRequest } from './request/create.dummy.request';
import { CreateDummyResponse } from './response/create.dummy.response';
import { DummyResponse } from './response/dummy.response';

@Controller('dummy')
export class DummyController {
  private readonly logger = new Logger(DummyController.name);
  constructor(private readonly appService: DummyService) {}

  @Get()
  async get(@Query('key') key: number): Promise<DummyResponse> {
    this.logger.log('key %s', key);
    return this.appService.getData(key);
  }

  @Post()
  async store(
    @Body() request: CreateDummyRequest,
  ): Promise<CreateDummyResponse> {
    return this.appService.storeData(request).then(
      (res) =>
        new CreateDummyResponse({
          id: res,
        }),
    );
  }
}
