import { Injectable } from '@nestjs/common';
import { CreateChiTietHoaDonDto } from './dto/create-chi-tiet-hoa-don.dto';
import { UpdateChiTietHoaDonDto } from './dto/update-chi-tiet-hoa-don.dto';
import { ChiTietHoaDonRepository } from './chi-tiet-hoa-don.repository';

@Injectable()
export class ChiTietHoaDonService {
  constructor(private chiTietHoaDonRepository: ChiTietHoaDonRepository) {}

  async create(createChiTietHoaDonDto: CreateChiTietHoaDonDto) {
    return this.chiTietHoaDonRepository.createChiTietHoaDon(
      createChiTietHoaDonDto,
    );
  }

  async findAll() {
    return this.chiTietHoaDonRepository.find();
  }

  async findOne(id: number) {
    return this.chiTietHoaDonRepository.findOne({
      where: { IdChiTietHoaDon: id },
    });
  }

  async update(id: number, updateChiTietHoaDonDto: UpdateChiTietHoaDonDto) {
    return this.chiTietHoaDonRepository.update(
      { IdChiTietHoaDon: id },
      updateChiTietHoaDonDto,
    );
  }

  async remove(id: number) {
    return this.chiTietHoaDonRepository.delete({
      IdChiTietHoaDon: id,
    });
  }
}
