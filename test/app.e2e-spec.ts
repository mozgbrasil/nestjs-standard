import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .then((res) => {
        // must be then, not a callback
        console.log('res: ', res.body);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  });

  it('/cats (GET)', () => {
    return request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .then((res) => {
        // must be then, not a callback
        console.log('res: ', res.body);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  });

  it('/cats/1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/cats/1')
      .expect(200)
      .then((res) => {
        // must be then, not a callback
        console.log('res: ', res.body);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  });

  it('/cats/a (GET)', () => {
    return request(app.getHttpServer())
      .get('/cats/a')
      .expect(400)
      .then((res) => {
        // must be then, not a callback
        console.log('res: ', res.body);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  });

  it('/cats (POST)', () => {
    return request(app.getHttpServer())
      .post('/cats')
      .send({ name: 'mik', age: 31, breed: 'brad' })
      .expect(201)
      .then((res) => {
        // must be then, not a callback
        console.log('res: ', res.body);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  });

  it('/cats (GET)', () => {
    return request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .then((res) => {
        // must be then, not a callback
        console.log('res: ', res.body);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  });

  it('/profile (GET)', () => {
    return (
      request(app.getHttpServer())
        .get('/profile')
        // .expect(200)
        .then((res) => {
          // must be then, not a callback
          console.log('res: ', res.body);
        })
        .catch((err) => {
          console.log('err: ', err);
        })
    );
  });

  // it('/auth/login (POST)', () => {
  //   return request(app.getHttpServer())
  //     .post('/auth/login')
  //     .send({ username: 'john', password: 'changeme' })
  //     .expect(201)
  //     .then((res) => {
  //       // must be then, not a callback
  //       console.log('res: ', res.body);
  //     })
  //     .catch((err) => {
  //       console.log('err: ', err);
  //     });
  // });
});
