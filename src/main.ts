import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLoggerService } from './logger/customLogger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // bufferLogs: true,
    // logger: false, // 開発がある程度進んだらデフォルトロガーはfalseにする
  });
  app.useLogger(app.get(CustomLoggerService));
  await app.listen(3000);
}
bootstrap();
