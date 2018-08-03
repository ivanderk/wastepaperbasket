import { Product } from '../api/service.api';

export class ProductDto implements Product {

   constructor(public name: string){}
}