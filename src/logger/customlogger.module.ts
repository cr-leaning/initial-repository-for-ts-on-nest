import { Module } from '@nestjs/common';
import { CustomLoggerService } from './customlogger.service';

@Module({
  providers: [CustomLoggerService],
  exports: [CustomLoggerService],
})
export class CustomLoggerModule {}
