import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { FindOptionsWhere } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  createUser(data: CreateUserDto) {
    const password = bcrypt.hashSync(data.password, 10);
    return this.userRepository.createUser({ ...data, password });
  }

  findOneUserById(id: number) {
    return this.findOneUserBy({ id });
  }

  async findOneUserBy(where: FindOptionsWhere<User>) {
    const user = await this.userRepository.findOneUser({ ...where });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
