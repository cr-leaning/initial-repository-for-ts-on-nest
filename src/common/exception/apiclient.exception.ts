/*
https://docs.nestjs.com/exception-filters#custom-exceptions
*/

import { HttpException, HttpStatus } from '@nestjs/common';

export class ApiExceptionException extends HttpException {
  constructor() {
    super('ApiException', HttpStatus.I_AM_A_TEAPOT);
  }
}
