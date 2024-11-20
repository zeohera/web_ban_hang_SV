import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { ChiTietHoaDon } from './entities/chi-tiet-hoa-don.entity';

@Injectable()
export class ChiTietHoaDonRepository extends Repository<ChiTietHoaDon> {
  constructor(private datasource: DataSource) {
    super(ChiTietHoaDon, datasource.createEntityManager());
  }

  async findOneChiTietHoaDon(where: FindOptionsWhere<ChiTietHoaDon>) {
    return this.findOneBy({ ...where });
  }

  async createChiTietHoaDon(user: DeepPartial<ChiTietHoaDon>) {
    const findChiTietHoaDon = await this.findOneChiTietHoaDon({
      
    });
    if (findChiTietHoaDon) {
      throw new BadRequestException('ChiTietHoaDon is exist');
    }
    return await this.save(user);
  }
}
