import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/user.dto';
import { User } from 'src/users/entities/user.entity';
import { UserService } from 'src/users/services/user/user.service';

@Controller('users')
export class UsersController {
  constructor(
    private userService: UserService
  ){}

  @Get('all')
  getUsers(): User[]{
    return this.userService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): User{
    return this.userService.findone(id);
  }

  @Post()
  createUser(@Body() data: CreateUserDTO){
    return this.userService.create(data);
  }


  @Get('orders/:id')
  getOrders(@Param('id', ParseIntPipe) id: number){
    return `Se recibio la petición con el Id: ${id}`;
  }

  @Get('')
  getOrdersByUser(@Body() data:any){
    const user = '';
  }
}
