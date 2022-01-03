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

    const [status, message, stack] =
      exception instanceof HttpException
        ? [exception.getStatus(), exception.message, exception.stack]
        : [HttpStatus.INTERNAL_SERVER_ERROR];
    // const status =
    //   exception instanceof HttpException
    //     ? exception.getStatus()
    //     : HttpStatus.INTERNAL_SERVER_ERROR;

    // if (status >= 500) {
    //   this.logger.error({ request, response });
    // } else if (status >= 400) {
    //   this.logger.warn({ request, response });
    // }

    response.status(status).json({
      statusCode: status,
      message: message,
      timestamp: timezonedLocale,
      path: request.url,
      stack: stack,
    });
    if (status >= 500) {
      this.logger.error(response);
    }
    this.logger.log('exec excepiton filter');
  }
}
