import { Module } from '@nestjs/common';
import { DanhMucService } from './danh-muc.service';
import { DanhMucController } from './danh-muc.controller';
import { DanhMucRepository } from './danh-muc.repository';
import { NguoiDungModule } from '../nguoi-dung/nguoi-dung.module';

@Module({
  imports: [NguoiDungModule],
  controllers: [DanhMucController],
  providers: [DanhMucService, DanhMucRepository],
  exports: [DanhMucService],
})
export class DanhMucModule {}
