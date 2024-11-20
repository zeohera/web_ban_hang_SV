import { PickType } from '@nestjs/swagger';
import { SanPham } from '../entities/san-pham.entity';

export class CreateSanPhamDto extends PickType(SanPham, [
  'TenSanPham',
  'AnhSanPham',
  'MoTa',
  'GiaKhuyenMai',
  'GiaBan',
  'GiaNhap',
  'TrangThai',
  'IdDanhMuc',
  'IdNhaCungCap',
] as const) {}
