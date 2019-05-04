import { Product } from "../models/product.class";

export class ProductState {
  constructor(
    public showProductCode: boolean = false,
    public products: Array<Product> = [],
    public current: Product
  ) { }
}