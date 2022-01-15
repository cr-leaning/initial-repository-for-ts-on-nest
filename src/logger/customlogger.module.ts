import { Global, Module } from '@nestjs/common';
import { CustomLoggerService } from './customlogger.service';

@Global()
@Module({
  providers: [CustomLoggerService],
  exports: [CustomLoggerService],
})
export class CustomLoggerModule {}
