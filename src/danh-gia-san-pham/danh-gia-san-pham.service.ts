import { Injectable } from '@nestjs/common';
import { CreateDanhGiaSanPhamDto } from './dto/create-danh-gia-san-pham.dto';
import { UpdateDanhGiaSanPhamDto } from './dto/update-danh-gia-san-pham.dto';

@Injectable()
export class DanhGiaSanPhamService {
  create(createDanhGiaSanPhamDto: CreateDanhGiaSanPhamDto) {
    return 'This action adds a new danhGiaSanPham';
  }

  findAll() {
    return `This action returns all danhGiaSanPham`;
  }

  findOne(id: number) {
    return `This action returns a #${id} danhGiaSanPham`;
  }

  update(id: number, updateDanhGiaSanPhamDto: UpdateDanhGiaSanPhamDto) {
    return `This action updates a #${id} danhGiaSanPham`;
  }

  remove(id: number) {
    return `This action removes a #${id} danhGiaSanPham`;
  }
}
