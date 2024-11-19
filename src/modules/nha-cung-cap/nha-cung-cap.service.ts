import { Injectable } from '@nestjs/common';
import { CreateNhaCungCapDto } from './dto/create-nha-cung-cap.dto';
import { UpdateNhaCungCapDto } from './dto/update-nha-cung-cap.dto';

@Injectable()
export class NhaCungCapService {
  create(createNhaCungCapDto: CreateNhaCungCapDto) {
    return 'This action adds a new nhaCungCap';
  }

  findAll() {
    return `This action returns all nhaCungCap`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nhaCungCap`;
  }

  update(id: number, updateNhaCungCapDto: UpdateNhaCungCapDto) {
    return `This action updates a #${id} nhaCungCap`;
  }

  remove(id: number) {
    return `This action removes a #${id} nhaCungCap`;
  }
}
