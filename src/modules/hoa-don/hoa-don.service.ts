import { Injectable } from '@nestjs/common';
import { CreateHoaDonDto } from './dto/create-hoa-don.dto';
import { UpdateHoaDonDto } from './dto/update-hoa-don.dto';
import { HoaDonRepository } from './hoa-don.repository';

@Injectable()
export class HoaDonService {
  constructor(private readonly hoaDonRepository: HoaDonRepository) {}

  async create(createHoaDonDto: CreateHoaDonDto) {
    return this.hoaDonRepository.create(createHoaDonDto);
  }

  async findAll() {
    return this.hoaDonRepository.find();
  }

  async findOne(id: number) {
    return this.hoaDonRepository.findOne({
      where: { IdHoaDon: id },});
  }

  async update(id: number, updateHoaDonDto: UpdateHoaDonDto) {
    return this.hoaDonRepository.update(id, updateHoaDonDto);
  }

  async remove(id: number) {
    return this.hoaDonRepository.delete(id);
  }
}
