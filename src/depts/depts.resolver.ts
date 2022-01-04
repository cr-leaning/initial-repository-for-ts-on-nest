import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeptsService } from './depts.service';
import { Dept } from './entities/dept.entity';
import { CreateDeptInput } from './dto/create-dept.input';
import { UpdateDeptInput } from './dto/update-dept.input';

@Resolver(() => Dept)
export class DeptsResolver {
  constructor(private readonly deptsService: DeptsService) {}

  @Mutation(() => Dept)
  createDept(@Args('createDeptInput') createDeptInput: CreateDeptInput) {
    return this.deptsService.create(createDeptInput);
  }

  @Query(() => [Dept], { name: 'depts' })
  findAll() {
    return this.deptsService.findAll();
  }

  @Query(() => Dept, { name: 'dept' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.deptsService.findOne(id);
  }

  @Mutation(() => Dept)
  updateDept(@Args('updateDeptInput') updateDeptInput: UpdateDeptInput) {
    return this.deptsService.update(updateDeptInput.id, updateDeptInput);
  }

  @Mutation(() => Dept)
  removeDept(@Args('id', { type: () => Int }) id: number) {
    return this.deptsService.remove(id);
  }
}
