import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { DanhGiaSanPham } from './entities/danh-gia-san-pham.entity';

@Injectable()
export class DanhGiaSanPhamRepository extends Repository<DanhGiaSanPham> {
  constructor(private datasource: DataSource) {
    super(DanhGiaSanPham, datasource.createEntityManager());
  }

  async findOneDanhGiaSanPham(where: FindOptionsWhere<DanhGiaSanPham>) {
    return this.findOneBy({ ...where });
  }

  async createDanhGiaSanPham(user: DeepPartial<DanhGiaSanPham>) {
    const findDanhGiaSanPham = await this.findOneDanhGiaSanPham({});
    if (findDanhGiaSanPham) {
      throw new BadRequestException('DanhGiaSanPham is exist');
    }
    return await this.save(user);
  }
}
