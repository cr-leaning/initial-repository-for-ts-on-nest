import { Injectable, LoggerService, Scope } from '@nestjs/common';
import { Format } from 'logform';
import { SERVICE_NAME } from 'src/constants/constats';
import { DateUtilsService } from 'src/utils/service/date.utils.service';
import { createLogger, format, Logger, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import Transport from 'winston-transport';

const ratate = (transport: Transport): Transport =>
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  transport.on('rotate', () => {});
const appLogTransform: Transport = ratate(
  new DailyRotateFile({
    level: 'info',
    dirname: `log/app/`,
    filename: `app_%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxFiles: '1d',
  }),
);
const errLogTransform: Transport = ratate(
  new DailyRotateFile({
    level: 'error',
    dirname: `log/err/`,
    filename: `err_%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxFiles: '1d',
  }),
);
const exceptionLogTransform: Transport = ratate(
  new DailyRotateFile({
    dirname: `log/err/`,
    filename: `exception_%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxFiles: '1d',
  }),
);

/**
 * カスタム項目用（サンプル）
 * 特に意味ある情報は出力していない
 */
const hostname = format((info, opts = {}) => {
  let value: string;

  if (!opts.hostname) {
    value = 'localhost';
  } else {
    value = opts.hostname;
  }

  if (!opts.alias) {
    info.hostname = value;
  } else {
    info[opts.alias] = value;
  }

  return info;
});

// @Injectable({ scope: Scope.TRANSIENT })
@Injectable()
export class CustomLoggerService implements LoggerService {
  logger: Logger;

  constructor(private readonly dateUtils: DateUtilsService) {
    this.logger = createLogger({
      level: 'info',
      format: this.logFormat(),
      defaultMeta: { service: SERVICE_NAME },
      transports: [
        new transports.Console({ level: 'debug' }),
        appLogTransform,
        errLogTransform,
      ],
      exceptionHandlers: [
        new transports.Console({ level: 'debug' }),
        exceptionLogTransform,
      ],
      handleExceptions: true,
      exitOnError: false,
    });
    this.logger.exceptions.handle(
      new transports.Console({ level: 'debug' }),
      exceptionLogTransform,
    );
  }

  logFormat(): Format {
    const timestamp = this.dateUtils.timezonedLocale;
    return format.combine(
      format.timestamp({ format: timestamp }), // timestampを出力する
      format.splat(), // String interpolation splat for %d %s-style messages.
      hostname({ alias: 'servername', hostname: 'test' }), // custom format,
      format.errors({ stack: true }),
      format.json(),
    );
  }

  info(message: any, ...option: any[]) {
    this.log(message, option);
  }

  log(message: any, ...option: any[]) {
    this.logger.info(message, option);
  }

  error(message: any, ...option: any[]) {
    this.logger.error(message, option);
  }

  warn(message: any, ...option: any[]) {
    this.logger.warn(message, option);
  }

  debug(message: any, ...option: any[]) {
    this.logger.debug(message, option);
  }

  verbose(message: any, ...option: any[]) {
    this.logger.verbose(message, option);
  }
}
