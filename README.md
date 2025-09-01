## Description

This project uses [Nest](https://github.com/nestjs/nest) and is a sandbox for typeORM as well as nestjs/json-api.

Typeorm, @nestjs/typeorm, nestjs-json-api and nestjs-json-api-typeorm.

@nestjs/swagger is included for API documentation.

@nestjs/config is included for .env variables.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## License

This project uses the same as Nest.js [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).


## Entity create/update workflow

### Change entity or generate migration:

```
pnpm typeorm migration:generate src/database/migrations/SomeChange
```

### Apply the migration

```
pnpm typeorm migration:run
```

### Revert (if needed)

```
pnpm typeorm migration:revert
```
