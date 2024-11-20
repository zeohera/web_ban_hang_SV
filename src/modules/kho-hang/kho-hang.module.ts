import { Module } from '@nestjs/common';
import { KhoHangService } from './kho-hang.service';
import { KhoHangController } from './kho-hang.controller';
import { KhoHangRepository } from './kho-hang.repository';

@Module({
  controllers: [KhoHangController],
  providers: [KhoHangService, KhoHangRepository],
  exports: [KhoHangService]
})
export class KhoHangModule {}
