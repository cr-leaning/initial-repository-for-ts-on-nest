/*
https://docs.nestjs.com/exception-filters#custom-exceptions
*/

import { HttpException, HttpStatus } from '@nestjs/common';

export class ApiClientException extends HttpException {
  readonly reason: any;
  constructor({ reason }: { reason: any }) {
    super('ApiClientException', HttpStatus.INTERNAL_SERVER_ERROR);
    this.reason = reason;
  }
}
