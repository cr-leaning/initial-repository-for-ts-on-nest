/*
https://docs.nestjs.com/exception-filters#custom-exceptions
*/

import { HttpException } from '@nestjs/common';
import { ApiExceptionInfoType } from './type/apiexceptioninfo.type';

export class BaseApiException extends HttpException {
  protected constructor({
    error,
    reason,
  }: {
    error: ApiExceptionInfoType;
    reason?: string | object;
  }) {
    super(
      { code: error.code, message: error.message, reason: reason },
      error.status,
    );
  }
}
