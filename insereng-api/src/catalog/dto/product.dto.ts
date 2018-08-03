import { Product } from '../api/product.api';

export class ProductDto implements Product {

   constructor(public name: string){}
}