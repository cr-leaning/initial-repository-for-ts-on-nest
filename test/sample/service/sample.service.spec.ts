/*
https://docs.nestjs.com/fundamentals/testing#unit-testing
*/

import { Test } from '@nestjs/testing';
import { SampleService } from '../../../src/sample/service/sample.service';

describe('SampleService', () => {
  let service: SampleService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [SampleService], // Add
    }).compile();

    service = moduleRef.get<SampleService>(SampleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getSampleData', () => {
    it('normal case', () => {
      expect(service.getSampleData('test')).toBe('testsample');
    });
  });
});
