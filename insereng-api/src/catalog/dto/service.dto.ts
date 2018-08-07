import { Service } from '../api/service.api';
import { Product } from '../api/product.api';

export class ServiceDto implements Service {

   public constructor(public name: string, public products: Array<Product>) {}
}