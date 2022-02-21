/*
https://docs.nestjs.com/exception-filters#custom-exceptions
*/

import { ERROR_MESSAGE } from 'src/constants/error.constants';
import { BaseApiException } from './baseapi.exception';

export class ApiClientException extends BaseApiException {
  constructor({ reason }: { reason: string }) {
    super({ error: ERROR_MESSAGE.UNEXPECTED_ERROR, reason: reason });
  }
}
