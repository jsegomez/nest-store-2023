import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { users } from './data.users';
import { CreateUserDTO } from 'src/users/dtos/user.dto';

@Injectable()
export class UserService {
  private users = users;

  findAll(): User[]{
    return this.users;
  }

  findone(id: number){
    const user = this.users.find(user => user.id == id);
    if(user) return user;
    throw new NotFoundException(`Usuario con id: ${id} no fue encontrado`);
  }

  create(user: CreateUserDTO){
    const index = this.users.length + 1;
    const newUser: User = {id: index, ...user}
    this.users.push(newUser);
  }
}
