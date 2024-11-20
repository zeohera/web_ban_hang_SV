import { Module } from '@nestjs/common';
import { NhaCungCapService } from './nha-cung-cap.service';
import { NhaCungCapController } from './nha-cung-cap.controller';
import { NhaCungCapRepository } from './nha-cung-cap.repository';

@Module({
  controllers: [NhaCungCapController],
  providers: [NhaCungCapService, NhaCungCapRepository],
  exports: [NhaCungCapService],
})
export class NhaCungCapModule {}
