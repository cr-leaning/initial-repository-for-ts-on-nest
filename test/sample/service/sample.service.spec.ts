/*
https://docs.nestjs.com/fundamentals/testing#unit-testing
*/

import { Test } from '@nestjs/testing';
import { SAMPLE_TYPES } from '../../../src/sample/interface/types';
import { SampleServiceImpl } from '../../../src/sample/service/sample.service';

describe('SampleService', () => {
  let service: SampleServiceImpl;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [
        {
          provide: SAMPLE_TYPES.services.SampleService,
          useClass: SampleServiceImpl,
        },
      ], // Add
    }).compile();

    service = moduleRef.get<SampleServiceImpl>(
      SAMPLE_TYPES.services.SampleService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getSampleData', () => {
    it('normal case', () => {
      service
        .getSampleData('test')
        .then((reslut) => expect(reslut).toBe('test:service:'));
    });
  });
});
