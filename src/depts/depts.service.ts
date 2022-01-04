import { Injectable } from '@nestjs/common';
import { CreateDeptInput } from './dto/create-dept.input';
import { UpdateDeptInput } from './dto/update-dept.input';

@Injectable()
export class DeptsService {
  create(createDeptInput: CreateDeptInput) {
    return 'This action adds a new dept';
  }

  findAll() {
    return `This action returns all depts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dept`;
  }

  update(id: number, updateDeptInput: UpdateDeptInput) {
    return `This action updates a #${id} dept`;
  }

  remove(id: number) {
    return `This action removes a #${id} dept`;
  }
}
