import { Injectable } from '@nestjs/common';
import { CreateHoaDonDto } from './dto/create-hoa-don.dto';
import { UpdateHoaDonDto } from './dto/update-hoa-don.dto';

@Injectable()
export class HoaDonService {
  create(createHoaDonDto: CreateHoaDonDto) {
    return 'This action adds a new hoaDon';
  }

  findAll() {
    return `This action returns all hoaDon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hoaDon`;
  }

  update(id: number, updateHoaDonDto: UpdateHoaDonDto) {
    return `This action updates a #${id} hoaDon`;
  }

  remove(id: number) {
    return `This action removes a #${id} hoaDon`;
  }
}
