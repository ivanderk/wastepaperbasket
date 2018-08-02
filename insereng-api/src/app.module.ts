import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { SecurityModule } from './security/security.module';
import { RequestModule } from './request/request.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot() , SecurityModule , RequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
