import { Injectable } from '@nestjs/common';
import { CreateChiTietHoaDonDto } from './dto/create-chi-tiet-hoa-don.dto';
import { UpdateChiTietHoaDonDto } from './dto/update-chi-tiet-hoa-don.dto';

@Injectable()
export class ChiTietHoaDonService {
  create(createChiTietHoaDonDto: CreateChiTietHoaDonDto) {
    return 'This action adds a new chiTietHoaDon';
  }

  findAll() {
    return `This action returns all chiTietHoaDon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chiTietHoaDon`;
  }

  update(id: number, updateChiTietHoaDonDto: UpdateChiTietHoaDonDto) {
    return `This action updates a #${id} chiTietHoaDon`;
  }

  remove(id: number) {
    return `This action removes a #${id} chiTietHoaDon`;
  }
}
