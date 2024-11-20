import { Module } from '@nestjs/common';
import { SanPhamService } from './san-pham.service';
import { SanPhamController } from './san-pham.controller';
import { SanPhamRepository } from './san-pham.repository';

@Module({
  controllers: [SanPhamController],
  providers: [SanPhamService, SanPhamRepository],
  exports: [SanPhamService],
})
export class SanPhamModule {}
