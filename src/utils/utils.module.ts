import { UtilsService } from './service/utils.service';
import { DateUtilsService } from './service/date.utils.service';
/*
https://docs.nestjs.com/modules
*/

import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [UtilsService, DateUtilsService],
  exports: [UtilsService, DateUtilsService],
})
export class UtilsModule {}
