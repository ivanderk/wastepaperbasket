import { Product } from '../api/product.api';

export class ProductDto implements Product {

   constructor(public name: string, public description: string, public price: string){}
}