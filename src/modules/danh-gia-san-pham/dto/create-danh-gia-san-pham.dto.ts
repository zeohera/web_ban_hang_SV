import { PickType } from '@nestjs/swagger';
import { DanhGiaSanPham } from '../entities/danh-gia-san-pham.entity';

export class CreateDanhGiaSanPhamDto extends PickType(DanhGiaSanPham, [
  'Diem',
  'NoiDungDanhGia',
  'IdSanPham',
  'IdNguoiDung',
]) {}
