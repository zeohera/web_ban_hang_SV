import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { DanhMuc } from './entities/danh-muc.entity';

@Injectable()
export class DanhMucRepository extends Repository<DanhMuc> {
  constructor(private datasource: DataSource) {
    super(DanhMuc, datasource.createEntityManager());
  }

  async findOneDanhMuc(where: FindOptionsWhere<DanhMuc>) {
    return this.findOneBy({ ...where });
  }

  async createDanhMuc(user: DeepPartial<DanhMuc>) {
    const findDanhMuc = await this.findOneDanhMuc({});
    if (findDanhMuc) {
      throw new BadRequestException('DanhMuc is exist');
    }
    return await this.save(user);
  }
}
