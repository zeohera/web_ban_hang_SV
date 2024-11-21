import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { NguoiDung } from './entities/nguoi-dung.entity';

@Injectable()
export class NguoiDungRepository extends Repository<NguoiDung> {
  async findAll() {
    return await this.find();
  }
  constructor(private datasource: DataSource) {
    super(NguoiDung, datasource.createEntityManager());
  }

  async findOneNguoiDung(where: FindOptionsWhere<NguoiDung>) {
    return this.findOneBy({ ...where });
  }

  async createNguoiDung(user: DeepPartial<NguoiDung>) {
    const findNguoiDung = await this.findOneNguoiDung({});
    if (findNguoiDung) {
      throw new BadRequestException('NguoiDung is exist');
    }
    return await this.save(user);
  }
}
