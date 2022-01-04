import { Test, TestingModule } from '@nestjs/testing';
import { DeptsService } from '../../src/depts/depts.service';

describe('DeptsService', () => {
  let service: DeptsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeptsService],
    }).compile();

    service = module.get<DeptsService>(DeptsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
