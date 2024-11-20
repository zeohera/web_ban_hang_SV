import { PickType } from '@nestjs/swagger';
import { KhoHang } from '../entities/kho-hang.entity';

export class CreateKhoHangDto extends PickType(KhoHang, [
  'SoLuongNhapVao',
  'SoLuongBanRa',
  'SoLuongTonKho',
  'IdSanPham',
]) {}
