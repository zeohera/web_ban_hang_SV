import { PickType } from '@nestjs/swagger';
import { HoaDon } from '../entities/hoa-don.entity';

export class CreateHoaDonDto extends PickType(HoaDon, [
  'DiaChiGiaoHang',
  'HinhThucThanhToan',
  'NgayTaoDon',
  'TongTien',
  'IdNguoiDung',
] as const) {}
