import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { LoaiKhachHang } from './entities/loai-khach-hang.entity';

@Injectable()
export class LoaiKhachHangRepository extends Repository<LoaiKhachHang> {
  async findAll() {
    return await this.find();
  }
  constructor(private datasource: DataSource) {
    super(LoaiKhachHang, datasource.createEntityManager());
  }

  async findOneLoaiKhachHang(where: FindOptionsWhere<LoaiKhachHang>) {
    return this.findOneBy({ ...where });
  }
}
