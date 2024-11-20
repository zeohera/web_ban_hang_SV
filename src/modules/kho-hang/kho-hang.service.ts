import { Injectable } from '@nestjs/common';
import { CreateKhoHangDto } from './dto/create-kho-hang.dto';
import { UpdateKhoHangDto } from './dto/update-kho-hang.dto';
import { KhoHangRepository } from './kho-hang.repository';

@Injectable()
export class KhoHangService {
  constructor(private readonly khoHangRepository: KhoHangRepository) {}

  async create(createKhoHangDto: CreateKhoHangDto) {
    return await this.khoHangRepository.createKhoHang(createKhoHangDto);
  }

  async findAll() {
    return await this.khoHangRepository.find();
  }

  async findOne(id: number) {
    return await this.khoHangRepository.findOneKhoHang({ IdKhoHang: id });
  }

  async update(id: number, updateKhoHangDto: UpdateKhoHangDto) {
    return await this.khoHangRepository.update(id, updateKhoHangDto);
  }

  async remove(id: number) {
    return await this.khoHangRepository.delete(id);
  }
}
