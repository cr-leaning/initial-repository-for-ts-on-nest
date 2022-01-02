import { Injectable, LoggerService, Scope } from '@nestjs/common';
import { Format } from 'logform';
import { createLogger, format, Logger, transport, transports } from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import * as Transport from 'winston-transport';

const SERVICE_NAME = 'initial-repository';
const appLogTransform: Transport = new DailyRotateFile({
  level: 'info',
  dirname: `log/app/`,
  filename: `app_%DATE%.log`,
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxFiles: '1d',
});
const logErrTransform: Transport = new DailyRotateFile({
  level: 'error',
  dirname: `log/err/`,
  filename: `err_%DATE%.log`,
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxFiles: '1d',
});
const logExceptionTransform: Transport = new DailyRotateFile({
  dirname: `log/err/`,
  filename: `exception_%DATE%.log`,
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxFiles: '1d',
});
const timezoned = () => {
  return new Date().toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
  });
};

// @Injectable({ scope: Scope.TRANSIENT })
export class CustomLoggerService implements LoggerService {
  logger: Logger;

  constructor() {
    this.logger = createLogger({
      level: 'info',
      format: this.logFormat(),
      defaultMeta: { service: SERVICE_NAME },
      transports: [
        new transports.Console({ level: 'debug' }),
        this.logRotate(appLogTransform),
        this.logRotate(logErrTransform),
      ],
      exceptionHandlers: [
        new transports.Console({ level: 'debug' }),
        this.logRotate(logExceptionTransform),
      ],
      handleExceptions: true,
      exitOnError: false,
    });
    this.logger.exceptions.handle(
      new transports.Console({ level: 'debug' }),
      this.logRotate(logExceptionTransform),
    );
  }

  logFormat(): Format {
    return format.combine(
      format.timestamp({ format: timezoned }), // timestampを出力する
      format.splat(), // String interpolation splat for %d %s-style messages.
      this.hostname(),
      format.errors({ stack: true }),
      format.json(),
    );
  }

  hostname = format((info, opts = {}) => {
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

  logRotate(transport: Transport): Transport {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return transport.on('rotate', () => {});
  }

  info(message: string, ...option: any[]) {
    this.log(message, option);
  }

  log(message: string, ...option: any[]) {
    this.logger.info(message, option);
  }

  error(message: string, ...option: any[]) {
    this.logger.error(message, option);
  }

  warn(message: string, ...option: any[]) {
    this.logger.warn(message, option);
  }

  debug(message: string, ...option: any[]) {
    this.logger.debug(message, option);
  }

  verbose(message: string, ...option: any[]) {
    this.logger.verbose(message, option);
  }
}
