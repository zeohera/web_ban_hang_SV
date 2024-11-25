import { Module } from '@nestjs/common';
import { DanhGiaSanPhamService } from './danh-gia-san-pham.service';
import { DanhGiaSanPhamController } from './danh-gia-san-pham.controller';
import { DanhGiaSanPhamRepository } from './danh-gia-san-pham.repository';
import { NguoiDungModule } from '../nguoi-dung/nguoi-dung.module';

@Module({
  imports: [NguoiDungModule],
  controllers: [DanhGiaSanPhamController],
  providers: [DanhGiaSanPhamService, DanhGiaSanPhamRepository],
  exports: [DanhGiaSanPhamService],
})
export class DanhGiaSanPhamModule {}
