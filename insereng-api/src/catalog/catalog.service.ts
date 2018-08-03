import { Injectable } from '@nestjs/common';
import { ServiceDto } from './dto/service.dto';
import { ProductDto } from './dto/product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceEntity } from './entity/service.entity';
import { Repository } from 'typeorm';
import { getMongoManager } from "typeorm";


@Injectable()
export class CatalogService {
  constructor(
    //@InjectRepository(ServiceEntity)
    //private readonly repository: Repository<ServiceEntity>
  ) {}

  public async getCatalog(): Promise<Array<ServiceEntity>> {

    const manager = getMongoManager();
    return await manager.find(ServiceEntity);

  }
}
