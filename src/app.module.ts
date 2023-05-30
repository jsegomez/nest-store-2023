import { Module } from '@nestjs/common';

// Modules
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    UsersModule,
    ProductsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


