import { Module } from '@nestjs/common';
import { HoaDonService } from './hoa-don.service';
import { HoaDonController } from './hoa-don.controller';

@Module({
  controllers: [HoaDonController],
  providers: [HoaDonService]
})
export class HoaDonModule {}
