import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvGeneralService } from './env/service/env.general.service';
import { CustomLoggerService } from './logger/customLogger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // bufferLogs: true,
    // logger: false, // 開発がある程度進んだらデフォルトロガーはfalseにする
  });
  app.useLogger(app.get(CustomLoggerService));
  app.useGlobalPipes(new ValidationPipe());
  const env = app.get(EnvGeneralService);
  await app.listen(env.Port);
}
bootstrap();
