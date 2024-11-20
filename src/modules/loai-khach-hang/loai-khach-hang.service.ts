import { Injectable } from '@nestjs/common';
import { CreateLoaiKhachHangDto } from './dto/create-loai-khach-hang.dto';
import { UpdateLoaiKhachHangDto } from './dto/update-loai-khach-hang.dto';
import { LoaiKhachHangRepository } from './loai-khach-hang.repository';

@Injectable()
export class LoaiKhachHangService {
  constructor(
    private readonly loaiKhachHangRepository: LoaiKhachHangRepository,
  ) {}

  create(createLoaiKhachHangDto: CreateLoaiKhachHangDto) {
    return this.loaiKhachHangRepository.createLoaiKhachHang(
      createLoaiKhachHangDto,
    );
  }

  findAll() {
    return this.loaiKhachHangRepository.findAll();
  }

  findOne(id: number) {
    return this.loaiKhachHangRepository.findOneLoaiKhachHang({
      IdLoaiKhach: id,
    });
  }

  update(id: number, updateLoaiKhachHangDto: UpdateLoaiKhachHangDto) {
    return this.loaiKhachHangRepository.update(id, updateLoaiKhachHangDto);
  }

  async remove(id: number) {
    return await this.loaiKhachHangRepository.delete(id);
  }
}
