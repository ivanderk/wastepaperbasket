import { Injectable } from '@nestjs/common';
import { ServiceDto } from './dto/service.dto';
import { ProductDto } from './dto/product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceEntity } from './entity/service.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatalogService {
  constructor(
    @InjectRepository(ServiceEntity)
    private readonly serviceRepository: Repository<ServiceEntity>,
  ) {}

  public saveServiceEntity(serviceEntity: ServiceEntity): Promise<ServiceEntity> {
    return this.serviceRepository.save(serviceEntity);
  }

  public async getCatalog(): Promise<Array<ServiceEntity>> {
    return await this.serviceRepository.find();
  }
}
