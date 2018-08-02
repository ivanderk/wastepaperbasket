import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Request {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column()
  creationDate: Date;

}