import { Module } from '@nestjs/common';
import { ChiTietHoaDonService } from './chi-tiet-hoa-don.service';
import { ChiTietHoaDonController } from './chi-tiet-hoa-don.controller';

@Module({
  controllers: [ChiTietHoaDonController],
  providers: [ChiTietHoaDonService]
})
export class ChiTietHoaDonModule {}
