/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { SampleController } from '../sample/controller/sample.controller';
import { SampleService } from '../sample/service/sample.service';

@Module({
  imports: [],
  controllers: [SampleController],
  providers: [SampleService],
})
export class SampleModule {}
