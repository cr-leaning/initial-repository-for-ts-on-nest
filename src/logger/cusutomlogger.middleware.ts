import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class CusutomLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(CusutomLoggerMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, path: url, body } = req;
    const userAgent = req.get('user-agent') || '';

    res.on('close', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');

      this.logger.log(
        body,
        res.json,
        `${method} ${url} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
      );
    });

    next();
  }
}
