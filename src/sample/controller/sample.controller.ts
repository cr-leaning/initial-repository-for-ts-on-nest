/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Query, Param } from '@nestjs/common';
import { SampleService } from '../service/sample.service';

@Controller()
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Get('sample')
  getSampleData(@Query('key') key: string): string {
    return this.sampleService.getSampleData(key);
  }

  @Get('sample/:id')
  getSampleData2(@Param('id') id: string, @Query('key') key: string): string {
    return this.sampleService.getSampleData(id + key);
  }
}
