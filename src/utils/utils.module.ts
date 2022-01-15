import { DateUtilsService } from './service/date.utils.service';
/*
https://docs.nestjs.com/modules
*/

import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [DateUtilsService],
  exports: [DateUtilsService],
})
export class UtilsModule {}
