/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleService {
  getSampleData(key: string): string {
    return key + 'sample';
  }
}
