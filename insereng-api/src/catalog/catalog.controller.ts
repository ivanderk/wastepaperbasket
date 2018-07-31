import { Controller, Body, Post, Get } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { ServiceDto } from './dto/ServiceDto';

@Controller('catalog')
export class CatalogController {
  constructor(public readonly catalogService: CatalogService) {}

  
  //public async Get(): string {

  @Get()
  public async Get(): Promise<Array<ServiceDto>> {
    const catalog = await this.catalogService.getCatalog();
    return catalog;

  }
}
