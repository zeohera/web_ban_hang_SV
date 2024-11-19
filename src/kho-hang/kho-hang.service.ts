import { Injectable } from '@nestjs/common';
import { CreateKhoHangDto } from './dto/create-kho-hang.dto';
import { UpdateKhoHangDto } from './dto/update-kho-hang.dto';

@Injectable()
export class KhoHangService {
  create(createKhoHangDto: CreateKhoHangDto) {
    return 'This action adds a new khoHang';
  }

  findAll() {
    return `This action returns all khoHang`;
  }

  findOne(id: number) {
    return `This action returns a #${id} khoHang`;
  }

  update(id: number, updateKhoHangDto: UpdateKhoHangDto) {
    return `This action updates a #${id} khoHang`;
  }

  remove(id: number) {
    return `This action removes a #${id} khoHang`;
  }
}
