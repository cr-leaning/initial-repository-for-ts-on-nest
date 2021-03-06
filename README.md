# Node.js + NestJS + TypeScript のサンプルプロジェクト

## Description

| Category     |                    | Category      |                    | Category         |                    |
| ------------ | ------------------ | ------------- | ------------------ | ---------------- | ------------------ |
| API          | :white_check_mark: | Database(R/W) |                    | Database(R/O)    |                    |
| External API | :white_check_mark: | Storage       |                    | Migration SQL    |                    |
| Scheduler    |                    | Batch Job     |                    | Consumer         |                    |
| Producer     |                    | Unit Test     | :white_check_mark: | Integration Test | :white_check_mark: |
| Chache       | :white_check_mark: |

## Teck Stack

| Category    | name       |
| ----------- | ---------- |
| Language    | TypeScript |
| Exec Env    | Node.js    |
| App FW      | NestJs     |
| DB          | -          |
| Chache      | redis      |
| Test FW     | JEST       |
| Logger      | winston    |
| Http Client | superagent |

## prepare

install redis
[for windows](https://github.com/MicrosoftArchive/redis/releases)

## for dev

### install

init

```
yarn install
```

start service

```
yarn start
```

watch mode

```
yarn start:dev
```

run test

```
yarn test
```

## memo

お試しで作成中。README は後ほど修正

### 理解に役立ちそうなリンク

- [NestJS の基礎概念の図解と要約](https://zenn.dev/morinokami/articles/nestjs-overview)
- [Jest](https://jestjs.io/ja/docs/configuration)
- [参考とした Repository](https://github.com/eryzerz/nestjs-ddd)
- [class-validator](https://github.com/typestack/class-validator)
- [coifnguration](https://zenn.dev/waddy/articles/nestjs-configuration-service)

### 注意事項

CI/CD を考慮して yarn で作ります。

**以下はデフォルト**

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
