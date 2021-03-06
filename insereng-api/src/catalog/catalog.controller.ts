import { Controller, Body, Post, Get } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { ServiceEntity } from './entity/service.entity';

@Controller('catalog')
export class CatalogController {
  constructor(public readonly catalogService: CatalogService) {}

  @Get()
  public async Get(): Promise<Array<ServiceEntity>> {
    const catalog = await this.catalogService.getCatalog();
    return catalog;
  }

  @Post()
  async createCatalog(@Body() serviceEntity: ServiceEntity): Promise<ServiceEntity> {
    return this.catalogService.saveServiceEntity(serviceEntity);
  }

}
