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

# Create mongodb container
docker run -it -d -p 27017:27017 mongo

# List of containers
docker container ls

# Start container
docker container start <container_id>

# Copy a file to the container
docker exec -i <container_id>/bin/bash -c "cat > /tmp/citiesbbdd.dump" < citiesbbdd.dump

# Enter to the bash
docker exec -it <container_id> bash

# Exit from the bash
exit

# Restore dump in mongodb
mongorestore --db citiesbbdd --drop --archive=/tmp/citiesbbdd.dump

# Create dump in mongodb
mongodump --archive=/tmp/citiesbbdd.dump --db citiesbbdd 

# Copy file from container to host
docker cp <container_id>:/tmp/citiesbbdd.dump .

# run mongo client connected to server process
$ docker run -it --link mongo-db:mongo --rm mongo mongo --host mongo test

```

## Install mongodb for insereng project
```bash
# Mongo image install
docker pull mongo

# Create mongodb container
docker run -it -d -p 27017:27017 mongo

# List of containers
docker container ls

# Start container
docker container start <container_id>

# Get insere.dump from  bdddump/ folder

# Copy a file to the container
docker exec -i <container_id>/bin/bash -c "cat > /tmp/insere.dump" < insere.dump

# Enter to the bash
docker exec -it <container_id> bash

# Restore dump
mongorestore --db insere --drop --archive=/tmp/insere.dump
