/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/infrastructure/repository.module';
import { SampleController } from '../sample/controller/sample.controller';
import { SampleServiceImpl } from '../sample/service/sample.service';
import { SampleApplicationImpl } from './applications/sample.application';
import { SAMPLE_TYPES } from './interface/types';

@Module({
  imports: [RepositoryModule],
  controllers: [SampleController],
  providers: [
    {
      provide: SAMPLE_TYPES.services.SampleService,
      useClass: SampleServiceImpl,
    },
    {
      provide: SAMPLE_TYPES.applications.SampleApplication,
      useClass: SampleApplicationImpl,
    },
  ],
})
export class SampleModule {}
