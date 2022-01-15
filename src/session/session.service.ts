/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { EnvRedisService } from 'src/env/service/env.redis.service';
import { EnvSessionService } from 'src/env/service/env.session.service';
import connectRedis from 'connect-redis';
import session from 'express-session';
import Redis from 'ioredis';
import { UtilsService } from 'src/utils/service/utils.service';

@Injectable()
export class SessionService {
  constructor(
    private readonly redisEnv: EnvRedisService,
    private readonly sessionEnv: EnvSessionService,
    private readonly utils: UtilsService,
  ) {}

  get Session() {
    const RedisStore = connectRedis(session);
    const redisClient = new Redis({
      host: this.redisEnv.Host,
      port: this.redisEnv.Port,
      commandTimeout: this.redisEnv.Timeout,
      keepAlive: this.redisEnv.KeepAlive,
      keyPrefix: this.redisEnv.SessionPrefix,
    });
    const secure = this.utils.isProduction;

    return session({
      secret: this.sessionEnv.Secret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: secure,
        maxAge: Number(this.sessionEnv.MaxAge),
      },
      store: new RedisStore({ client: redisClient }),
    });
  }
}
