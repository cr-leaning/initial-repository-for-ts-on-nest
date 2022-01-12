/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DummyApiRepositoryImpl } from './client/dummy.api.repository';
import { INFRASTRACTURE_TYPES } from './interface/types';

@Module({
  providers: [
    {
      provide: INFRASTRACTURE_TYPES.repository.DummyRepository,
      useClass: DummyApiRepositoryImpl,
    },
  ],
  exports: [
    {
      provide: INFRASTRACTURE_TYPES.repository.DummyRepository,
      useClass: DummyApiRepositoryImpl,
    },
  ],
})
export class RepositoryModule {}
