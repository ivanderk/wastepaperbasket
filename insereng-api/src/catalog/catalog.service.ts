import { Injectable } from '@nestjs/common';
import { ServiceDto } from './dto/ServiceDto';
import { ProductDto } from './dto/ProductDto';


@Injectable()
export class CatalogService {
  
  public async getCatalog(): Promise<Array<ServiceDto>> {
  
    //return Promise.resolve([new ServiceDto('Production Line', [new ProductDto('Training')])]);
    return [new ServiceDto('Production Line', [new ProductDto('Training')])];
  }
}
