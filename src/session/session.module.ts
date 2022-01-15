import { SessionService } from './session.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  providers: [SessionService],
  exports: [SessionService],
})
export class SessionModule {}
