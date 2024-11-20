import { Injectable } from '@nestjs/common';
import { CreateSanPhamDto } from './dto/create-san-pham.dto';
import { UpdateSanPhamDto } from './dto/update-san-pham.dto';

import { SanPhamRepository } from './san-pham.repository';

@Injectable()
export class SanPhamService {
  constructor(private readonly sanPhamRepository: SanPhamRepository) {}

  async create(createSanPhamDto: CreateSanPhamDto) {
    const sanPham = this.sanPhamRepository.create(createSanPhamDto);
    return await this.sanPhamRepository.save(sanPham);
  }

  async findAll() {
    return await this.sanPhamRepository.find();
  }

  async findOne(id: number) {
    return await this.sanPhamRepository.findOneBy({ IdSanPham: id });
  }

  async update(id: number, updateSanPhamDto: UpdateSanPhamDto) {
    return await this.sanPhamRepository.update(id, updateSanPhamDto);
  }

  async remove(id: number) {
    return await this.sanPhamRepository.softDelete(id);
  }
}
