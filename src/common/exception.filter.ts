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
import { timezonedLocale } from 'src/utils/date.utils';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger();

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const ex =
      exception instanceof HttpException
        ? {
            status: exception.getStatus(),
            message: exception.message,
            stack: exception.stack,
          }
        : { status: HttpStatus.INTERNAL_SERVER_ERROR };
    // const status =
    //   exception instanceof HttpException
    //     ? exception.getStatus()
    //     : HttpStatus.INTERNAL_SERVER_ERROR;

    // if (status >= 500) {
    //   this.logger.error({ request, response });
    // } else if (status >= 400) {
    //   this.logger.warn({ request, response });
    // }

    response.status(ex.status).json({
      statusCode: ex.status,
      message: ex.message,
      timestamp: timezonedLocale,
      path: request.url,
      stack: ex.stack,
    });
    if (ex.status >= 500) {
      this.logger.error(response);
    }
    this.logger.log('exec excepiton filter');
  }
}
