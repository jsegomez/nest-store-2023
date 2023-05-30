import { Module } from '@nestjs/common';

// Controllers
import { BrandsController } from './controllers/brands/brands.controller';
import { CategoryController } from './controllers/category/category.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { ProductsController } from './controllers/products/products.controller';
import { UsersController } from './controllers/users/users.controller';

// Services
import { ProductsService } from './services/products.service';

@Module({
  imports: [],
  controllers: [
    BrandsController,
    CategoryController,
    CustomersController,
    OrdersController,
    ProductsController,
    UsersController
  ],
  providers: [
    ProductsService
  ],
})
export class AppModule {}


