import { Injectable } from '@nestjs/common';
import { CreateDanhGiaSanPhamDto } from './dto/create-danh-gia-san-pham.dto';
import { UpdateDanhGiaSanPhamDto } from './dto/update-danh-gia-san-pham.dto';
import { DanhGiaSanPhamRepository } from './danh-gia-san-pham.repository';

@Injectable()
export class DanhGiaSanPhamService {
  constructor(private danhGiaSanPhamRepository: DanhGiaSanPhamRepository) {}

  create(createDanhGiaSanPhamDto: CreateDanhGiaSanPhamDto) {
    return this.danhGiaSanPhamRepository.createDanhGiaSanPham(
      createDanhGiaSanPhamDto,
    );
  }

  findAll() {
    return this.danhGiaSanPhamRepository.find({});
  }

  findOne(id: number) {
    return this.danhGiaSanPhamRepository.findOneDanhGiaSanPham({
      IdDanhGia: id,
    });
  }

  update(id: number, updateDanhGiaSanPhamDto: UpdateDanhGiaSanPhamDto) {
    return this.danhGiaSanPhamRepository.update(
      { IdDanhGia: id },
      updateDanhGiaSanPhamDto,
    );
  }

  remove(id: number) {
    return this.danhGiaSanPhamRepository.delete({ IdDanhGia: id });
  }
}
