import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { mailConfig } from './mail.config';
import { swaggerConfig } from './swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  swaggerConfig(app)
  await app.listen(3001);
}
bootstrap();
