import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { LoaiKhachHang } from './entities/loai-khach-hang.entity';

@Injectable()
export class LoaiKhachHangRepository extends Repository<LoaiKhachHang> {
  findAll() {
    throw new Error('Method not implemented.');
  }
  constructor(private datasource: DataSource) {
    super(LoaiKhachHang, datasource.createEntityManager());
  }

  async findOneLoaiKhachHang(where: FindOptionsWhere<LoaiKhachHang>) {
    return this.findOneBy({ ...where });
  }

  async createLoaiKhachHang(user: DeepPartial<LoaiKhachHang>) {
    const findLoaiKhachHang = await this.findOneLoaiKhachHang({});
    if (findLoaiKhachHang) {
      throw new BadRequestException('LoaiKhachHang is exist');
    }
    return await this.save(user);
  }
}
