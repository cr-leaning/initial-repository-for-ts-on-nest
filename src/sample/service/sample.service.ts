/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { SampleService } from '../interface/service/sample.service.interface';

@Injectable()
export class SampleServiceImpl implements SampleService {
  async getSampleData(key: string): Promise<string> {
    return key + ':service:';
  }
}
