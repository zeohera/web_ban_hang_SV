import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { NhaCungCap } from './entities/nha-cung-cap.entity';

@Injectable()
export class NhaCungCapRepository extends Repository<NhaCungCap> {
  async findAll() {
    return await this.find();
  }
  constructor(private datasource: DataSource) {
    super(NhaCungCap, datasource.createEntityManager());
  }

  async findOneNhaCungCap(where: FindOptionsWhere<NhaCungCap>) {
    return this.findOneBy({ ...where });
  }

  async createNhaCungCap(user: DeepPartial<NhaCungCap>) {
    const findNhaCungCap = await this.findOneNhaCungCap({});
    if (findNhaCungCap) {
      throw new BadRequestException('NhaCungCap is exist');
    }
    return await this.save(user);
  }
}
