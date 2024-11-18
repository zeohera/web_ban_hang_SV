import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private datasource: DataSource) {
    super(User, datasource.createEntityManager());
  }

  async findOneUser(where: FindOptionsWhere<User>) {
    return this.findOneBy({ ...where });
  }

  async createUser(user: DeepPartial<User>) {
    const findUser = await this.findOneUser({ email: user.email });
    if (findUser) {
      throw new BadRequestException('User is exist');
    }
    return await this.save(user);
  }
}
