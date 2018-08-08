
import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import { ProductEntity } from './product.entity';
import { ServiceRelatedEntity } from './service-related.entity';

@Entity('services')
export class ServiceEntity {

  @ObjectIdColumn() id: ObjectID;

  @Column() name: string;

  @Column() category: string;

  @Column(type => ProductEntity)
  products: ProductEntity[];

  @Column(type => ServiceRelatedEntity)
  servicesRelated: ServiceRelatedEntity[];
}