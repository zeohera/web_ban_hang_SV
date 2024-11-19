import { PartialType } from '@nestjs/swagger';
import { CreateLoaiKhachHangDto } from './create-loai-khach-hang.dto';

export class UpdateLoaiKhachHangDto extends PartialType(CreateLoaiKhachHangDto) {}
