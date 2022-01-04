import { Test, TestingModule } from '@nestjs/testing';
import { DeptsResolver } from '../../src/depts/depts.resolver';
import { DeptsService } from '../../src/depts/depts.service';

describe('DeptsResolver', () => {
  let resolver: DeptsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeptsResolver, DeptsService],
    }).compile();

    resolver = module.get<DeptsResolver>(DeptsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
