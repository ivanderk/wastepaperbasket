import { Product } from './product.api';

export interface Service {
    name: string;
    products: Array<Product>;
}