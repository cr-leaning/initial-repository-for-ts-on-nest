/*
https://docs.nestjs.com/exception-filters#exception-filters-1
*/

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import { ERROR_MESSAGE } from 'src/constants/error.constants';
import { BaseApiException } from 'src/exception/baseapi.exception';
import { DateUtilsService } from 'src/utils/service/date.utils.service';

type ErrorInfo = {
  status: number;
  message: string;
  stack: string;
  response: string | object;
};

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: Error, host: ArgumentsHost) {
    const ex: ErrorInfo = this.convertErrorInfo(exception);
    if (ex.status >= HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error({
        message: ex.message,
        stack: ex.stack,
        context: ex.response,
      });
    } else {
      this.logger.warn({ message: ex.message, context: ex.response });
    }
    this.logger.log('exec excepiton filter');

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.status(ex.status).json(ex.response);
  }

  /**
   * 例外情報の変換
   * @param exception exception
   * @returns エラー情報
   */
  private convertErrorInfo(exception: Error): ErrorInfo {
    // HACK: きれいにしたい
    if (exception instanceof BaseApiException) {
      return {
        status: exception.getStatus(),
        message: exception.message,
        stack: exception.stack,
        response: exception.getResponse,
      };
    } else if (exception instanceof BadRequestException) {
      return {
        status: exception.getStatus(),
        message: exception.message,
        stack: exception.stack,
        response: {
          code: ERROR_MESSAGE.BADREQUEST_ERROR.code,
          message: ERROR_MESSAGE.BADREQUEST_ERROR.message,
          reason: this.getMessage(exception),
        },
      };
    } else if (exception instanceof HttpException) {
      return {
        status: exception.getStatus(),
        message: exception.message,
        stack: exception.stack,
        response: {
          code: ERROR_MESSAGE.UNKNOWN_HTTPEXCEPTION.code,
          message: ERROR_MESSAGE.UNKNOWN_HTTPEXCEPTION.message,
          reason: this.getMessage(exception),
        },
      };
    }

    // どのエラーにも該当しない場合
    return {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: exception.message,
      stack: exception.stack,
      response: {
        code: ERROR_MESSAGE.UNEXPECTED_ERROR.code,
        message: ERROR_MESSAGE.UNEXPECTED_ERROR.message,
      },
    };
  }

  /**
   * エラー応答のためにresposenのメセージを取り出す
   * @param exception
   * @returns message
   */
  private getMessage(exception: BadRequestException): string {
    if (exception.getResponse() && exception.getResponse()['message']) {
      return exception.getResponse()['message'];
    } else {
      return exception.message;
    }
  }
}
