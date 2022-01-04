import { Module } from '@nestjs/common';
import { DeptsService } from './depts.service';
import { DeptsResolver } from './depts.resolver';

@Module({
  providers: [DeptsResolver, DeptsService],
})
export class DeptsModule {}
