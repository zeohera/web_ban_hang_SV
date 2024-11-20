import { PickType } from '@nestjs/swagger';
import { NguoiDung } from '../entities/nguoi-dung.entity';

export class CreateNguoiDungDto extends PickType(NguoiDung, [
  'SoDienThoai',
  'MatKhau',
  'Email',
  'Quyen',
  'IdLoaiKhach',
] as const) {}
