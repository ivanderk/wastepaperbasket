import { Controller, Body, Post, Get } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { ServiceDto } from './dto/service.dto';
import { ServiceEntity } from './entity/service.entity';

@Controller('catalog')
export class CatalogController {
  constructor(public readonly catalogService: CatalogService) {}

  
  //public async Get(): string {

  @Get()
  public async Get(): Promise<Array<ServiceEntity>> {
    const catalog = await this.catalogService.getCatalog();
    return catalog;

  }
}
