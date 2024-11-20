import { PartialType, PickType } from '@nestjs/swagger';
import { ChiTietHoaDon } from '../entities/chi-tiet-hoa-don.entity';

export class CreateChiTietHoaDonDto extends PickType(
  PartialType(ChiTietHoaDon),
  ['IdSanPham', 'SoLuongMua', 'IdHoaDon'],
) {}
