/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvSessionService {
  constructor(private readonly configService: ConfigService) {}

  get Secret(): string {
    return this.configService.get('SESSIOM_SECRET');
  }

  get MaxAge(): number {
    return this.configService.get('SESSION_MAX_AGE');
  }
}
