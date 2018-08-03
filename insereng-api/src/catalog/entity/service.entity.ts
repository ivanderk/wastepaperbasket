
import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

import { Service } from '../api/service.api';

@Entity('services')
export class ServiceEntity {
  @ObjectIdColumn() id: ObjectID;

  @Column() name: string;

  /*@Column
    products: Array<Product>;*/
}