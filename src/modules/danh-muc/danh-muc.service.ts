import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDanhMucDto } from './dto/create-danh-muc.dto';
import { UpdateDanhMucDto } from './dto/update-danh-muc.dto';
import { DanhMucRepository } from './danh-muc.repository';

@Injectable()
export class DanhMucService {
  constructor(private readonly danhMucRepository: DanhMucRepository) {}

  async create(createDanhMucDto: CreateDanhMucDto) {
    const findDanhMuc = await this.danhMucRepository.findOneBy({
      TenDanhMuc: createDanhMucDto.TenDanhMuc,
    });
    if (findDanhMuc) {
      throw new BadRequestException('DanhMuc is exist');
    }
    return this.danhMucRepository.save(createDanhMucDto);
  }

  async findAll() {
    return this.danhMucRepository.find();
  }

  async findOne(id: number) {
    return this.danhMucRepository.findOneBy({ IdDanhMuc: id });
  }

  async update(id: number, updateDanhMucDto: UpdateDanhMucDto) {
    const findDanhMuc = await this.danhMucRepository.preload({
      IdDanhMuc: id,
      ...updateDanhMucDto,
    });
    if (!findDanhMuc) {
      throw new BadRequestException('DanhMuc not found');
    }
    return this.danhMucRepository.save(findDanhMuc);
  }

  async remove(id: number) {
    const findDanhMuc = await this.danhMucRepository.findOneBy({
      IdDanhMuc: id,
    });
    if (!findDanhMuc) {
      throw new BadRequestException('DanhMuc not found');
    }
    return this.danhMucRepository.remove(findDanhMuc);
  }
}
