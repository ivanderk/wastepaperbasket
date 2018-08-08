import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import { ProductEntity } from 'catalog/entity/product.entity';

export class ServiceRelatedEntity {

  @Column() name: string;

  @Column() category: string;

}