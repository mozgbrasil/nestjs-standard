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
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  ValidationPipe,
} from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { UsersModule } from './users/users.module';
import { RolesGuard } from './common/guards/roles.guard';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CatsModule,
    AuthModule,
    UsersModule,
    CaslModule,
    TerminusModule,
    OrdersModule,
  ],
  controllers: [AppController, HealthController],
  providers: [
    AppService,
    DogHealthIndicator,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    // {
    //   // Enable authentication globally
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
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
