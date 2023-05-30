import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { CreateProductDTO } from 'src/products/dtos/product.dto';
import { Product } from 'src/products/entities/product.entity';
import { CustomIntPipe } from 'src/pipes/custom-int/custom-int.pipe';
import { ProductsService } from 'src/products/services/products.service';


@Controller('products')
export class ProductsController {
  constructor(
    private productService: ProductsService
  ){}

  @Get('all')
  findAll(): Product[]{
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', CustomIntPipe) id: number): Product {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateProductDTO): Product {
    return this.productService.create(payload);
  }
}



