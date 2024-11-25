import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateNguoiDungDto } from './dto/create-nguoi-dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi-dung.dto';
import { NguoiDungRepository } from './nguoi-dung.repository';
import { FindOptionsWhere } from 'typeorm';
import { NguoiDung } from './entities/nguoi-dung.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class NguoiDungService {
  constructor(private readonly nguoiDungRepository: NguoiDungRepository) {}

  async create(createNguoiDungDto: CreateNguoiDungDto) {
    try {
      const password = bcrypt.hashSync(createNguoiDungDto.MatKhau, 10);
      const newUser = await this.nguoiDungRepository.createNguoiDung({
        ...createNguoiDungDto,
        MatKhau: password,
      });
      return newUser;
    } catch (error) {
      console.log(error, 'error');

      throw new BadRequestException('Unable to create user');
    }
  }

  async findAll() {
    return await this.nguoiDungRepository.findAll();
  }

  async findOne(id: number) {
    const user = await this.nguoiDungRepository.findOneNguoiDung({
      IdNguoiDung: id,
    });
    if (!user) {
      throw new BadRequestException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: number, updateNguoiDungDto: UpdateNguoiDungDto) {
    const user = await this.findOne(id);
    return await this.nguoiDungRepository.save({
      ...user,
      ...updateNguoiDungDto,
    });
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return await this.nguoiDungRepository.remove(user);
  }

  async findOneUserBy(where: FindOptionsWhere<NguoiDung>) {
    const user = await this.nguoiDungRepository.findOneNguoiDung({ ...where });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
