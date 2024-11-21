import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateNhaCungCapDto } from './dto/create-nha-cung-cap.dto';
import { UpdateNhaCungCapDto } from './dto/update-nha-cung-cap.dto';
import { NhaCungCapRepository } from './nha-cung-cap.repository';

@Injectable()
export class NhaCungCapService {
  constructor(private readonly nhaCungCapRepository: NhaCungCapRepository) {}

  async create(createNhaCungCapDto: CreateNhaCungCapDto) {
    const existed = await this.nhaCungCapRepository.find({
      where: { TenNhaCungCap: createNhaCungCapDto.TenNhaCungCap },
    });
    
    if (existed.length > 0) {
      throw new BadRequestException('NhaCungCap is exist');
    }
    return await this.nhaCungCapRepository.createNhaCungCap(
      createNhaCungCapDto,
    );
  }

  async findAll() {
    return await this.nhaCungCapRepository.findAll();
  }

  async findOne(id: number) {
    return await this.nhaCungCapRepository.findOne({
      where: { IdNhaCungCap: id },
    });
  }

  async update(id: number, updateNhaCungCapDto: UpdateNhaCungCapDto) {
    return await this.nhaCungCapRepository.update(id, updateNhaCungCapDto);
  }

  async remove(id: number) {
    const nhaCungCap = await this.nhaCungCapRepository.findOne({
      where: { IdNhaCungCap: id },
    });
    if (!nhaCungCap) {
      throw new NotFoundException('NhaCungCap not found');
    }
    return await this.nhaCungCapRepository.remove(nhaCungCap);
  }
}
