/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvGeneralService {
  constructor(private readonly configService: ConfigService) {}

  get NodeEnv(): string {
    return this.configService.get('NODE_ENV');
  }

  get Port(): string {
    return this.configService.get('PORT');
  }
}
