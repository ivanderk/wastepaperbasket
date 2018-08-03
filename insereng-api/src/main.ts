import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';
import { environment } from 'environments';
import { createConnection, Connection } from 'typeorm';
import {ServiceEntity} from './catalog/entity/service.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  if (environment.cors){
    app.enableCors(environment.corsData);
  }

  // withouth parameers  createConnection will load connection options from
  // ormconfig.json / ormconfig.js / ormconfig.yml / ormconfig.env / ormconfig.xml
  // files, or from special environment variables

  const connection: Connection = await createConnection({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'insereng',
    entities: [ServiceEntity]
  });

  await app.listen(3000);
}
bootstrap();
