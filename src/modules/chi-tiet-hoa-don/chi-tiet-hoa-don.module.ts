import { Module } from '@nestjs/common';
import { ChiTietHoaDonService } from './chi-tiet-hoa-don.service';
import { ChiTietHoaDonController } from './chi-tiet-hoa-don.controller';
import { ChiTietHoaDonRepository } from './chi-tiet-hoa-don.repository';

@Module({
  controllers: [ChiTietHoaDonController],
  providers: [ChiTietHoaDonService, ChiTietHoaDonRepository],
  exports: [ChiTietHoaDonService],
})
export class ChiTietHoaDonModule {}
