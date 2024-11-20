import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { SanPham } from './entities/san-pham.entity';

@Injectable()
export class SanPhamRepository extends Repository<SanPham> {
  findAll() {
    throw new Error('Method not implemented.');
  }
  constructor(private datasource: DataSource) {
    super(SanPham, datasource.createEntityManager());
  }

  async findOneSanPham(where: FindOptionsWhere<SanPham>) {
    return this.findOneBy({ ...where });
  }

  async createSanPham(user: DeepPartial<SanPham>) {
    const findSanPham = await this.findOneSanPham({});
    if (findSanPham) {
      throw new BadRequestException('SanPham is exist');
    }
    return await this.save(user);
  }
}
