[checkmark]: https://raw.githubusercontent.com/mozgbrasil/mozgbrasil.github.io/master/assets/images/logos/logo_32_32.png 'MOZG'

![valid XHTML][checkmark]

# nestjs-standard 👉️

- https://nestjs.com/

- https://docs.nestjs.com/

```console
$ nest --help
$ nest new nestjs-standard

$ yarn add joi class-validator class-transformer @nestjs/sequelize sequelize sequelize-typescript mysql2 @nestjs/typeorm typeorm @nestjs/mongoose mongoose @nestjs/config js-yaml cache-manager @nestjs/schedule @nestjs/bull bull cookie-parser @nestjs/event-emitter compression @nestjs/axios express-session hbs @nestjs/passport passport passport-local @nestjs/jwt passport-jwt @casl/ability bcrypt helmet csurf @nestjs/throttler @nestjs/graphql graphql apollo-server-express @nestjs/websockets @nestjs/platform-socket.io @nestjs/microservices redis mqtt nats amqplib amqp-connection-manager kafkajs @grpc/grpc-js @grpc/proto-loader @nestjs/swagger swagger-ui-express @nestjs/terminus

$ yarn add @types/joi @types/sequelize @types/js-yaml @types/cron @types/cache-manager @types/bull @types/cookie-parser @types/multer @types/express-session @types/passport-local @types/passport-jwt @types/bcrypt -D

$ nest g resource cats

$ nest g resource users

$ nest g module auth
$ nest g service auth

$ nest g module casl
$ nest g class casl/casl-ability.factory

$ nest g controller health

$ nest g resource orders

```

- https://courses.nestjs.com/
- https://github.com/nestjs/nest/tree/master/sample

- http://localhost:3003/
- http://localhost:3004/api/

- https://nestjs-standard.vercel.app/
- https://nestjs-standard.vercel.app/api/

- https://nestjs-standard.herokuapp.com/
- https://nestjs-standard.herokuapp.com/api/

## Sinopse

👉️

A️té o momento foi

👇️

Criado os seguintes repositórios

- https://github.com/mozgbrasil/nestjs-monorepo/tree/develop
- https://github.com/mozgbrasil/nestjs-standard/tree/develop

👇️

- Implementado CRUD Cats utilizando "Services" para armazenamento em Matriz
- Implementado Swagger com ApiProperty
- Implementado Middleware
- Implementado Exception
- Implementado Pipes Validator
- Implementado Authentication Guards
- Implementado Interceptors
- Implementado CRUD Users
- Implementado Authentication
- Implementar Authorization
- Implementado Cors
- Implementado C.I. com suporte a testes automatizados e implantação na Vercel e Heroku, conforme
- https://github.com/mozgbrasil/nestjs-standard/actions/runs/1271045049

* Tests via Swagger

- http://localhost:3004/api/#/default/AppController_getHello

- http://localhost:3004/api/#/cats/CatsController_findAll
- http://localhost:3004/api/#/cats/CatsController_create
- http://localhost:3004/api/#/cats/CatsController_findAll

- http://localhost:3004/api/#/default/UsersController_login_local

> Request Parameters

    {"username": "john", "password": "changeme"}

- http://localhost:3004/api/#/default/UsersController_login_jwt

> Request Parameters

    {"username": "john", "password": "changeme"}

> Response body

    {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJzdWIiOjEsImlhdCI6MTYzMjc0NzA1MiwiZXhwIjoxNjMyNzQ3MTEyfQ.nsnfZOuxb7kTPDvAVKeMSQWyLjZfdIGlEEQHnJkMNQI"
    }

- http://localhost:3004/api/#/users/UsersController_getProfile

> Response body

    Download
    {
      "statusCode": 401,
      "message": "Unauthorized"
    }

```console
$ curl -X POST http://localhost:3004/auth/login/jwt -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"`

$ curl http://localhost:3004/profile -H "Authorization: Bearer ???"
```

👇️

@TODO: CI - Test = Not Work, Arquivo renomeado com extensão "-DISABLED"

```console
$ find . -name "*.*-DISABLED" -type f
./src/app.controller.spec.ts-DISABLED
./src/auth/auth.service.spec.ts-DISABLED
```

👇️

Feito integração junto a Cielo no passo de transação está funcional via API

Implementado RabbitMQ seguindo metodologia a seguir https://www.youtube.com/watch?v=u3qGnyPy-pk&t=80s

Feito uso do "Interceptor" e armazenando os requests da API para uma fila no RabbitMQ

Usando RabbitMQ local e na nuvem usando o serviço cloudamqp.com

Tenho uma duvida

Devo armazenar as respostas da API correto ?

Sabe me informar se é possivel usando o "Interceptor" pois ainda não consegui e li esse artigo mencionando que náo é possivel
https://newbedev.com/nestjs-intercept-and-modify-outgoing-http-request

Se não for possivel eu chamo o método de publicar no "RabbitMQ" para cada response

@TODO: Como armazenar os retornos em fila no RabbitMQ ?
@TODO: Consumir fila do RabbitMQ e armazenar em banco de dados

Prosseguindo com os proximos passos

👇️

👇️

👇️

👇️

👉️

## Contribuição

Caso queira contribuir para melhoria da documentação de um Fork no repositório e envie um pull request ou edite no github

## Requerimentos

- https://www.docker.com/
- https://code.visualstudio.com/
- https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack

## Executando local

```console

git clone ☝️

cd <directory>

code --new-window .

```

## Executando no container

- Utilize o container do Visual Studio Code

# Nest

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
