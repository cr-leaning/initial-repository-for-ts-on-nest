/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { SampleApiRepositoryImpl } from './client/sample.api.repository';
import { INFRASTRACTURE_TYPES } from './interface/types';

@Module({
  providers: [
    {
      provide: INFRASTRACTURE_TYPES.repository.SampleRepository,
      useClass: SampleApiRepositoryImpl,
    },
  ],
  exports: [
    {
      provide: INFRASTRACTURE_TYPES.repository.SampleRepository,
      useClass: SampleApiRepositoryImpl,
    },
  ],
})
export class RepositoryModule {}
