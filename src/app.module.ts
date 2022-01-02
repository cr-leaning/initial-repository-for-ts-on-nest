import { CustomLoggerService } from './logger/customLogger.service';
import { DummyModule } from './dummy/dummy.module';
import { SampleModule } from './sample/sample.module';
import { CustomLoggerModule } from './logger/customlogger.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/exception.filter';

import { Module } from '@nestjs/common';

@Module({
  imports: [DummyModule, SampleModule, CustomLoggerModule],
  providers: [
    CustomLoggerService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
