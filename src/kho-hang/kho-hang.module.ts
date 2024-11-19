import { Module } from '@nestjs/common';
import { KhoHangService } from './kho-hang.service';
import { KhoHangController } from './kho-hang.controller';

@Module({
  controllers: [KhoHangController],
  providers: [KhoHangService]
})
export class KhoHangModule {}
