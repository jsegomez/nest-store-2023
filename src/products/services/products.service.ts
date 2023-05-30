import { Injectable, NotFoundException } from '@nestjs/common';
import { products } from './data';
import { Product } from 'src/products/entities/product.entity';
import { CreateProductDTO } from 'src/products/dtos/product.dto';

@Injectable()
export class ProductsService {
  private products = products;

  findAll(): Product[]{
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.products.find(product => product.id == id);
    if(product) return product;
    throw new NotFoundException(`Producto con id: ${id} no fue encontrado`);
  }

  create(data: CreateProductDTO): Product{
    const id = this.products.length + 1;
    const newProduct: Product = {id, ...data}
    this.products.push(newProduct);
    return newProduct;
  }
}






