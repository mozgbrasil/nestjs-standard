import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  //

  const app = await NestFactory.create(AppModule);

  //

  // FAIL test/app.e2e-spec.ts
  // const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.setViewEngine('hbs');

  //

  await app.listen(process.env.PORT || 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);

  //
}
bootstrap();
