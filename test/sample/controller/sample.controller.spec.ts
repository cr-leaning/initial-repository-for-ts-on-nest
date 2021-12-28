/*
https://docs.nestjs.com/fundamentals/testing#unit-testing
*/

import { Test } from '@nestjs/testing';
import { SampleController } from '../../../src/sample/controller/sample.controller';
import { SampleApplicationImpl } from '../../../src/sample/applications/sample.application';
import { SampleServiceImpl } from '../../../src/sample/service/sample.service';
import { SAMPLE_TYPES } from '../../../src/sample/interface/types';

describe('SampleController', () => {
  let sampleController: SampleController;
  let sampleApplication: SampleApplicationImpl;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [SampleController],
      providers: [
        {
          provide: SAMPLE_TYPES.services.SampleService,
          useClass: SampleServiceImpl,
        },
        {
          provide: SAMPLE_TYPES.applications.SampleApplication,
          useClass: SampleApplicationImpl,
        },
      ],
    }).compile();

    sampleApplication = moduleRef.get<SampleApplicationImpl>(
      SAMPLE_TYPES.applications.SampleApplication,
    );
    sampleController = moduleRef.get<SampleController>(SampleController);
  });

  it('should be defined', () => {
    expect(sampleController).toBeDefined();
  });

  describe('/sample', () => {
    it('normal case', () => {
      const param = 'test';
      const expected = 'sampleService';
      const mcokSampleApplication = jest
        .spyOn(sampleApplication, 'getSampleData')
        .mockImplementation(async () => expected);

      sampleController.getSampleData(param).then((result) => {
        expect(result).toBe(expected);
        expect(mcokSampleApplication).toBeCalledTimes(1);
        expect(mcokSampleApplication).toBeCalledWith(expect.anything());
      });
    });
  });

  describe('/sample/:id', () => {
    it('normal case', () => {
      const key = 'key1';
      const param = 'test';
      const expected = 'sampleService';
      const mcokSampleApplication = jest
        .spyOn(sampleApplication, 'getSampleData')
        .mockImplementation(async () => expected);

      sampleController.getSampleData2(key, param).then((result) => {
        expect(result).toBe(expected);
        expect(mcokSampleApplication).toBeCalledTimes(1);
        expect(mcokSampleApplication).toBeCalledWith(expect.anything());
      });
    });
  });
});
