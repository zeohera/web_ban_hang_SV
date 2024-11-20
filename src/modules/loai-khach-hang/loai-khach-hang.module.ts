import { Module } from '@nestjs/common';
import { LoaiKhachHangService } from './loai-khach-hang.service';
import { LoaiKhachHangController } from './loai-khach-hang.controller';
import { LoaiKhachHangRepository } from './loai-khach-hang.repository';

@Module({
  controllers: [LoaiKhachHangController],
  providers: [LoaiKhachHangService, LoaiKhachHangRepository],
  exports: [LoaiKhachHangService],
})
export class LoaiKhachHangModule {}
