import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';
import { environment } from './environments';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  if (environment.cors){
    app.enableCors(environment.corsData);
  }

  await app.listen(3000);
}
bootstrap();
