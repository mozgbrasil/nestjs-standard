import { APP_FILTER, APP_PIPE, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CaslModule } from './casl/casl.module';
import { CatsModule } from './cats/cats.module';
import { ConfigModule } from '@nestjs/config';
import { DogHealthIndicator } from './health/dog.health';
import { HealthController } from './health/health.controller';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { LoggingInterceptor } from './core/interceptors/logging.interceptor';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CatsModule,
    AuthModule,
    UsersModule,
    CaslModule,
    TerminusModule,
  ],
  controllers: [AppController, HealthController],
  providers: [
    AppService,
    DogHealthIndicator,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // },
    // {
    //   // Enable authentication globally
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
