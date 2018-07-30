# server1

## Description

INSERE NG Integration API

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
npm run start:prod
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

## Mongo installation & config

For Mongo install and config options see: https://hub.docker.com/_/mongo/

```bash
# Mongo image install
docker pull mongo

# run mongo server process mapped to local dir
$ docker run --name mongo-db -v c:/src/insereng/data:/data/db -d mongo

# run mongo client connected to server process
$ docker run -it --link mongo-db:mongo --rm mongo mongo --host mongo test

```