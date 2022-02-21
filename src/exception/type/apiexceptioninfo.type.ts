import { HttpStatus } from '@nestjs/common';

export type ApiExceptionInfoType = {
  status: HttpStatus;
  code: number;
  message: string;
};
