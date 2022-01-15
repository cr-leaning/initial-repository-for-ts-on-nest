/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvRedisService {
  constructor(private readonly configService: ConfigService) {}

  get Host(): string {
    return this.configService.get('REDIS_HOST');
  }

  get Port(): number {
    return this.configService.get('REDIS_PORT');
  }

  get Timeout(): number {
    return this.configService.get('REDIS_TIMEOUT');
  }

  get KeepAlive(): number {
    return this.configService.get('REDIS_KEEP_ALIVE');
  }

  get SessionPrefix(): string {
    return this.configService.get('REDIS_SESSION_PREFIX');
  }
}
