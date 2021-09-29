import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import RabbitmqServer from '../../rabbitmq-server';

async function publishRabbitmqServer(logHttp) {
  console.log('IIFE: ');
  const server = new RabbitmqServer(process.env.AMQP_URL);
  await server.start();
  await server.publishInQueue('queue-request-mjv', JSON.stringify(logHttp));
}

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const [req, res] = context.getArgs();
    var getArgs = context.getArgs();
    var getClass = context.getClass();
    var getHandler = context.getHandler();
    var getType = context.getType();

    var timestamp = new Date().getTime();
    var logHttp = {
      url: req.originalUrl,
      body: req.body,
      method: req.method,
      headers: req.headers,
      timestamp: timestamp,
    };

    try {
      publishRabbitmqServer(logHttp);
    } catch (err) {
      console.log('err: ', err);
    }

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
  }
}
