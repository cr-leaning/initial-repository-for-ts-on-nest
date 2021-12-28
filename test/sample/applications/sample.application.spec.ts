/*
https://docs.nestjs.com/fundamentals/testing#unit-testing
*/

import { Test } from '@nestjs/testing';
import { SampleApplicationImpl } from '../../../src/sample/applications/sample.application';
import { SampleServiceImpl } from '../../../src/sample/service/sample.service';
import { SAMPLE_TYPES } from '../../../src/sample/interface/types';

describe('SampleApplication', () => {
  let sampleApplication: SampleApplicationImpl;
  let sampleService: SampleServiceImpl;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [],
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

    sampleService = moduleRef.get<SampleServiceImpl>(
      SAMPLE_TYPES.services.SampleService,
    );
    sampleApplication = moduleRef.get<SampleApplicationImpl>(
      SAMPLE_TYPES.applications.SampleApplication,
    );
  });

  it('should be defined', () => {
    expect(sampleApplication).toBeDefined();
  });

  describe('getSampleData', () => {
    it('normal case', () => {
      const param = 'test';
      const mockRetrun = 'sampleService';
      const mcokSampleService = jest
        .spyOn(sampleService, 'getSampleData')
        .mockImplementation(async () => mockRetrun);

      sampleApplication.getSampleData(param).then((result) => {
        expect(result).toBe(mockRetrun + ' application');
        expect(mcokSampleService).toBeCalledTimes(1);
        expect(mcokSampleService).toBeCalledWith(expect.anything());
      });
    });
  });
});
