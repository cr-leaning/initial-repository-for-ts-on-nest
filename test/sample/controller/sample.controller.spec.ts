/*
https://docs.nestjs.com/fundamentals/testing#unit-testing
*/

import { Test } from '@nestjs/testing';
import { SampleController } from '../../../src/sample/controller/sample.controller';
import { SampleService } from '../../../src/sample/service/sample.service';

describe('SampleController', () => {
  let sampleController: SampleController;
  let sampleService: SampleService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [SampleController], // Add
      providers: [SampleService], // Add
    }).compile();

    sampleService = moduleRef.get<SampleService>(SampleService);
    sampleController = moduleRef.get<SampleController>(SampleController);
  });

  describe('/sample', () => {
    it('normal case', () => {
      const result = 'sampleService';
      const param = 'test';
      jest
        .spyOn(sampleService, 'getSampleData')
        .mockImplementation(() => result);

      expect(sampleController.getSampleData(param)).toBe(result);
    });
  });
});
