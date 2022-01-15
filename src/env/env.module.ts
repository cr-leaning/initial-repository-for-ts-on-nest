import { EnvSessionService } from './service/env.session.service';
import { EnvRedisService } from './service/env.redis.service';
import { EnvDummyApiService } from './service/env.dummpyapi.service';
import { EnvGeneralService } from './service/env.general.service';
/*
https://docs.nestjs.com/modules
*/

import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  // TODO: add validate
  imports: [ConfigModule.forRoot({ envFilePath: ['.env.development'] })],
  providers: [
    EnvSessionService,
    EnvRedisService,
    EnvDummyApiService,
    EnvGeneralService,
  ],
  exports: [
    EnvSessionService,
    EnvRedisService,
    EnvDummyApiService,
    EnvGeneralService,
  ],
})
export class EnvModule {}
