import { ConfigService } from '@nestjs/config';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './v1/AppModule';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap () {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<number>('port');


  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen(port);

  console.info(`Started server on 127.0.0.1:${port}`);
}
bootstrap();