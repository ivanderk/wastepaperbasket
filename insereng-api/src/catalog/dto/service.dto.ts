import { Service } from '../api/service.api';
import { ServiceRelated } from '../api/service-related.api';
import { Product } from '../api/product.api';

export class ServiceDto implements Service {

   // tslint:disable-next-line:max-line-length
   public constructor(public name: string, public category: string, public products: Array<Product> , public servicesRelated: Array<ServiceRelated>) {}
}