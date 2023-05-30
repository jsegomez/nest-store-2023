import { Module } from '@nestjs/common';

// Controllers
import { BrandsController } from './controllers/brands/brands.controller';
import { CategoryController } from './controllers/category/category.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { ProductsController } from './controllers/products/products.controller';

// Services
import { ProductsService } from './services/products.service';

@Module({
  controllers: [
    BrandsController,
    CategoryController,
    OrdersController,
    ProductsController
  ],
  providers:[
    ProductsService
  ]
})
export class ProductsModule {}
