import { PartialType } from '@nestjs/swagger';
import { CreateChiTietHoaDonDto } from './create-chi-tiet-hoa-don.dto';

export class UpdateChiTietHoaDonDto extends PartialType(CreateChiTietHoaDonDto) {}
