import { Module } from '@nestjs/common';
import { HoaDonService } from './hoa-don.service';
import { HoaDonController } from './hoa-don.controller';
import { HoaDonRepository } from './hoa-don.repository';

@Module({
  controllers: [HoaDonController],
  providers: [HoaDonService, HoaDonRepository],
  exports: [HoaDonService],
})
export class HoaDonModule {}
