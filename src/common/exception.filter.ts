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
} from '@nestjs/common';
import { ApiClientException } from '../exception/apiclient.exception';
import { timezonedLocale } from 'src/utils/date.utils';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger();

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const ex =
      exception instanceof ApiClientException
        ? {
            status: exception.getStatus(),
            message: exception.message,
            stack: exception.stack,
            reason: exception.reason,
          }
        : exception instanceof HttpException
        ? {
            status: exception.getStatus(),
            message: exception.message,
            stack: exception.stack,
          }
        : { status: HttpStatus.INTERNAL_SERVER_ERROR };

    // if (ex.status >= 500) {
    //   this.logger.error({ request, response });
    // } else if (ex.status >= 400) {
    //   this.logger.warn({ request, response });
    // }

    response.status(ex.status).json({
      statusCode: ex.status,
      message: ex.message,
      timestamp: timezonedLocale,
      path: request.url,
      stack: ex.stack,
      reason: ex.reason,
    });
    // if (ex.status >= 500) {
    //   this.logger.error(response);
    // }
    if (ex.status >= 500) {
      this.logger.error({ ex });
    } else if (ex.status >= 400) {
      this.logger.warn({ ex });
    }
    this.logger.log('exec excepiton filter');
  }
}
