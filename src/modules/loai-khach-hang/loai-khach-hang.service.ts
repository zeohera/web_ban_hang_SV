import { Injectable } from '@nestjs/common';
import { CreateLoaiKhachHangDto } from './dto/create-loai-khach-hang.dto';
import { UpdateLoaiKhachHangDto } from './dto/update-loai-khach-hang.dto';

@Injectable()
export class LoaiKhachHangService {
  create(createLoaiKhachHangDto: CreateLoaiKhachHangDto) {
    return 'This action adds a new loaiKhachHang';
  }

  findAll() {
    return `This action returns all loaiKhachHang`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loaiKhachHang`;
  }

  update(id: number, updateLoaiKhachHangDto: UpdateLoaiKhachHangDto) {
    return `This action updates a #${id} loaiKhachHang`;
  }

  remove(id: number) {
    return `This action removes a #${id} loaiKhachHang`;
  }
}
