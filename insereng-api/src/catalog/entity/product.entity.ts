import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import { Product } from '../api/product.api';

export class ProductEntity {

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: string;

}