import { Module } from '@nestjs/common';
import { LoaiKhachHangService } from './loai-khach-hang.service';
import { LoaiKhachHangController } from './loai-khach-hang.controller';
import { LoaiKhachHangRepository } from './loai-khach-hang.repository';
import { NguoiDungModule } from '../nguoi-dung/nguoi-dung.module';

@Module({
  imports: [NguoiDungModule],
  controllers: [LoaiKhachHangController],
  providers: [LoaiKhachHangService, LoaiKhachHangRepository],
  exports: [LoaiKhachHangService],
})
export class LoaiKhachHangModule {}
