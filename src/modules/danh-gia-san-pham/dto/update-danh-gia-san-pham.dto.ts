import { PartialType } from '@nestjs/swagger';
import { CreateDanhGiaSanPhamDto } from './create-danh-gia-san-pham.dto';

export class UpdateDanhGiaSanPhamDto extends PartialType(CreateDanhGiaSanPhamDto) {}
