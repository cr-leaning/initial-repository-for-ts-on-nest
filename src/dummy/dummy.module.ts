/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DummyController } from './contorller/dummy.controller';
import { DummyService } from './service/dummy.service';

@Module({
  imports: [],
  controllers: [DummyController],
  providers: [DummyService],
})
export class DummyModule {}
