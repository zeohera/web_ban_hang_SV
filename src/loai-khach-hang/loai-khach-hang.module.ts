import { Module } from '@nestjs/common';
import { LoaiKhachHangService } from './loai-khach-hang.service';
import { LoaiKhachHangController } from './loai-khach-hang.controller';

@Module({
  controllers: [LoaiKhachHangController],
  providers: [LoaiKhachHangService]
})
export class LoaiKhachHangModule {}
