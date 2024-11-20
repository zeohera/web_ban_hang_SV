import { Module } from '@nestjs/common';
import { DanhGiaSanPhamService } from './danh-gia-san-pham.service';
import { DanhGiaSanPhamController } from './danh-gia-san-pham.controller';
import { DanhGiaSanPhamRepository } from './danh-gia-san-pham.repository';

@Module({
  controllers: [DanhGiaSanPhamController],
  providers: [DanhGiaSanPhamService, DanhGiaSanPhamRepository],
  exports: [DanhGiaSanPhamService],
})
export class DanhGiaSanPhamModule {}
