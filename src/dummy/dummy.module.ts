/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AppController } from '../dummy/contorller/app.controller';
import { AppService } from '../dummy/service/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class DummyModule {}
