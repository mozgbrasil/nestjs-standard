import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CaslModule } from './casl/casl.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [CatsModule, UsersModule, AuthModule, CaslModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
