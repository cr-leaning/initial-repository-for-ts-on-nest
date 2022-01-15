/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvDummyApiService {
  constructor(private readonly configService: ConfigService) {}

  get Url(): string {
    return this.configService.get('DUMMY_API_URL');
  }

  get Endpoint(): string {
    return this.configService.get('DUMMY_API_ENDPOINT');
  }

  get ApiKey(): string {
    return this.configService.get('DUMMY_API_KEY');
  }

  get Accept(): string {
    return this.configService.get('DUMMY_API_ACCEPT');
  }

  get ConnectionTimeout(): string {
    return this.configService.get('DUMMY_API_CONNECTION_TIMEOUT');
  }

  get ReadTimeout(): string {
    return this.configService.get('DUMMY_API_READ_TIMEOUT');
  }

  get MaxRetry(): string {
    return this.configService.get('DUMMY_RETRY_COUNT');
  }
}
