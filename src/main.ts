import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Request, Response, NextFunction } from 'express';
// import { RolesGuard } from './auth/guards/roles.guard';yar
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { ValidationPipe } from './common/pipes/validation.pipe';
import helmet from 'helmet';
import * as csurf from 'csurf';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Logger Main Request...`);
  next();
}

async function bootstrap() {
  //

  const app = await NestFactory.create(AppModule);

  //

  app.use(logger);
  // app.use(helmet());
  app.enableCors();
  // app.use(csurf());

  //

  // FAIL test/app.e2e-spec.ts
  // const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.setViewEngine('hbs');

  //

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //

  app.useGlobalFilters(new HttpExceptionFilter());

  //

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  //

  // app.useGlobalPipes(new ValidationPipe()); // validate POST

  //

  // app.useGlobalGuards(new RolesGuard());

  //

  await app.listen(process.env.PORT || 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);

  //
}
bootstrap();
