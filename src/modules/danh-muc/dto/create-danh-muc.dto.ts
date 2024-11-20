import { PickType } from '@nestjs/swagger';
import { DanhMuc } from '../entities/danh-muc.entity';

export class CreateDanhMucDto extends PickType(DanhMuc, ['TenDanhMuc']) {}
