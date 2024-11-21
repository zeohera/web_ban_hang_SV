import { PickType } from '@nestjs/swagger';
import { NhaCungCap } from '../entities/nha-cung-cap.entity';

export class CreateNhaCungCapDto extends PickType(NhaCungCap, [
  'TenNhaCungCap',
  'DiaChi',
] as const) {}
