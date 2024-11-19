import { Module } from '@nestjs/common';
import { DanhGiaSanPhamService } from './danh-gia-san-pham.service';
import { DanhGiaSanPhamController } from './danh-gia-san-pham.controller';

@Module({
  controllers: [DanhGiaSanPhamController],
  providers: [DanhGiaSanPhamService]
})
export class DanhGiaSanPhamModule {}
