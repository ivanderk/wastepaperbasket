import { Module } from '@nestjs/common';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';
//import { ServiceEntity } from './entity/service.entity';

@Module({
  imports: [],
  controllers: [CatalogController],
  providers: [CatalogService],
})
export class CatalogModule {}
