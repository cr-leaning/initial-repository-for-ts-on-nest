import { CustomLoggerService } from './logger/customLogger.service';
import { DummyModule } from './dummy/dummy.module';
import { SampleModule } from './sample/sample.module';
import { CustomLoggerModule } from './logger/customlogger.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/exception.filter';

import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CusutomLoggerMiddleware } from './logger/cusutomlogger.middleware';
import { UsersModule } from './users/users.module';
import { DeptsModule } from './depts/depts.module';

@Module({
  imports: [
    DummyModule,
    SampleModule,
    CustomLoggerModule,
    UsersModule,
    DeptsModule,
  ],
  providers: [
    CustomLoggerService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CusutomLoggerMiddleware).forRoutes('');
  }
}
