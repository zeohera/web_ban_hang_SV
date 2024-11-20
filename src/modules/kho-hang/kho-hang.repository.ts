import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { KhoHang } from './entities/kho-hang.entity';


@Injectable()
export class KhoHangRepository extends Repository<KhoHang> {
  constructor(private datasource: DataSource) {
    super(KhoHang, datasource.createEntityManager());
  }

  async findOneKhoHang(where: FindOptionsWhere<KhoHang>) {
    return this.findOneBy({ ...where });
  }

  async createKhoHang(user: DeepPartial<KhoHang>) {
    const findKhoHang = await this.findOneKhoHang({});
    if (findKhoHang) {
      throw new BadRequestException('KhoHang is exist');
    }
    return await this.save(user);
  }
}
