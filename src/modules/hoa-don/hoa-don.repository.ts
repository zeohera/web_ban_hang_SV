import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { HoaDon } from './entities/hoa-don.entity';


@Injectable()
export class HoaDonRepository extends Repository<HoaDon> {
  constructor(private datasource: DataSource) {
    super(HoaDon, datasource.createEntityManager());
  }

  async findOneHoaDon(where: FindOptionsWhere<HoaDon>) {
    return this.findOneBy({ ...where });
  }

  async createHoaDon(user: DeepPartial<HoaDon>) {
    const findHoaDon = await this.findOneHoaDon({});
    if (findHoaDon) {
      throw new BadRequestException('HoaDon is exist');
    }
    return await this.save(user);
  }
}
