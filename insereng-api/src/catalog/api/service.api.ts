import { Product } from './product.api';
import { ServiceRelated } from './service-related.api';

export interface Service {
    name: string;
    category: string;
    products: Array<Product>;
    servicesRelated: Array<ServiceRelated>;
}