import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // specify that im using expressjs
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // use expressjs  extended query parser which converts bracket notation into nested objects
  app.set('query parser', 'extended');

  const config = new DocumentBuilder()
    .setTitle('TypeORM Sandbox')
    .setDescription('The TypeORM Sandbox API description')
    .setVersion('1.0')
    .addTag('TypeORM Sandbox')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
