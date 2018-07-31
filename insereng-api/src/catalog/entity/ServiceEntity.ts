import {Column} from 'typeorm';
import { Service } from '../api/service.api';

export class ServiceEntity  {
         @Column() 
         name: string;

         /*@Column
         products: Array<Product>;*/
       }