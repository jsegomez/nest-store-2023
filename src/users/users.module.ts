import { Module } from '@nestjs/common';

// Controllers
import { CustomersController } from './controllers/customers/customers.controller';
import { UsersController } from './controllers/users/users.controller';
import { UserService } from './services/user/user.service';

@Module({
  controllers:[
    CustomersController,
    UsersController
  ],
  providers: [
    UserService
  ]
})
export class UsersModule {}
