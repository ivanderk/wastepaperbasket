import { Controller, Body, Post, Get } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
  constructor(public readonly catalogService: CatalogService) {}

  @Get()
  public Get(): string {

  //public async Get(): Promise<Array<ServiceDto>> {
   // const catalog = await this.catalogService.getCatalog();
    //return catalog;
    return 'Booh';

  }
}
