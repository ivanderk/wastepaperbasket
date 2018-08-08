import { ServiceRelated } from '../api/service-related.api';
import { Product } from '../api/product.api';

export class ServiceRelatedDto implements ServiceRelated {

   public constructor(public name: string, public category: string) {}
}