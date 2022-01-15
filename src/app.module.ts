import { UtilsModule } from './utils/utils.module';
import { EnvModule } from './env/env.module';
import { CustomLoggerService } from './logger/customLogger.service';
import { DummyModule } from './dummy/dummy.module';
import { SampleModule } from './sample/sample.module';
import { CustomLoggerModule } from './logger/customlogger.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/exception.filter';

import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CusutomLoggerMiddleware } from './logger/cusutomlogger.middleware';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    DummyModule,
    SampleModule,
    CustomLoggerModule,
    UsersModule,
    UtilsModule,
    EnvModule,
    // https://stackoverflow.com/questions/68354656/unhandledpromiserejectionwarning-error-you-must-await-server-start-before/68354663#68354663
    // GraphQLModule.forRoot({ autoSchemaFile: true, playground: true }),
    // GraphQLModule.forRoot({
    // debug: false,
    // playground: true,
    // typePaths: ['./**/*.graphql'],
    // definitions: {
    //   path: join(process.cwd(), 'src/graphql.ts'),
    //   outputAs: 'class',
    // },
    // }),
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
