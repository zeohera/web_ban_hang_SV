import { Module } from '@nestjs/common';
import { NguoiDungService } from './nguoi-dung.service';
import { NguoiDungController } from './nguoi-dung.controller';
import { NguoiDungRepository } from './nguoi-dung.repository';

@Module({
  controllers: [NguoiDungController],
  providers: [NguoiDungService, NguoiDungRepository],
  exports: [NguoiDungService],
})
export class NguoiDungModule {}
