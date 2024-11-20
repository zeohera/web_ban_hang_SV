import { PickType } from '@nestjs/swagger';
import { LoaiKhachHang } from '../entities/loai-khach-hang.entity';

export class CreateLoaiKhachHangDto extends PickType(LoaiKhachHang, [
  'PhanLoai',
  'MucTien',
] as const) {}
