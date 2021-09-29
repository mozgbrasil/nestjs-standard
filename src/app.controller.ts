import {
  Body,
  Controller,
  Get,
  Post,
  Render,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ApiHeader } from '@nestjs/swagger';
import RabbitmqServer from './rabbitmq-server';
import { CreateCatDto } from './cats/dto/create-cat.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // @Render('index')
  // render() {
  //   const message = this.appService.getHello();
  //   return { message };
  // }

  // # Passport local
  @UseGuards(AuthGuard('local'))
  @Post('auth/login/local')
  async login_local(@Body() createUserDto: CreateUserDto, @Request() req) {
    return req.user;
  }

  // # JWT functionality
  @UseGuards(LocalAuthGuard)
  @Post('auth/login/jwt')
  async login_jwt(@Body() createUserDto: CreateUserDto, @Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  // @Todo: Não funciona como esperado pois adiciona ; em posição inesperada, deveria ser adicionado após Authorization, mas não funciona
  @ApiHeader({
    name: 'Authorization ',
    description: 'Custom header',
  })
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // @Post('nest')
  // async nest(@Body() createCatDto: CreateCatDto, @Request() request: Request) {
  //   // const server = new RabbitmqServer(process.env.AMQP_URL);
  //   // await server.start();
  //   // await server.publishInQueue('nest-rmq', JSON.stringify(request.body));
  //   // await server.publishInExchange(
  //   //   'amq.direct',
  //   //   'rota2',
  //   //   JSON.stringify(request.body),
  //   // );
  //   return 'request.body';
  // }
}
