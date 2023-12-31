import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { initializeSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');
  app.enableVersioning();

  initializeSwagger(configService, app);
  await app.listen(configService.get('APP_PORT'));
}

bootstrap();
