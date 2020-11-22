import { Category } from './Category';
import { Seller } from './Seller';

export interface Product {
    seller : Seller,
    category : Category,
    imageUrl: string,
    name: string,
    price: Number,
    quantity: Number,
    id: Number
}