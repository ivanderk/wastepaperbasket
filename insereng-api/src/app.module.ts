import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { SecurityModule } from 'security/security.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogModule } from './catalog/catalog.module';
import { CatalogController } from './catalog/catalog.controller';


@Module({
  imports: [/*TypeOrmModule.forRoot(), */SecurityModule, CatalogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() { }

}
