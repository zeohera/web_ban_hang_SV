import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoaiKhachHangService } from './loai-khach-hang.service';
import { CreateLoaiKhachHangDto } from './dto/create-loai-khach-hang.dto';
import { UpdateLoaiKhachHangDto } from './dto/update-loai-khach-hang.dto';

@Controller('loai-khach-hang')
export class LoaiKhachHangController {
  constructor(private readonly loaiKhachHangService: LoaiKhachHangService) {}

  @Post()
  create(@Body() createLoaiKhachHangDto: CreateLoaiKhachHangDto) {
    return this.loaiKhachHangService.create(createLoaiKhachHangDto);
  }

  @Get()
  findAll() {
    return this.loaiKhachHangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loaiKhachHangService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoaiKhachHangDto: UpdateLoaiKhachHangDto) {
    return this.loaiKhachHangService.update(+id, updateLoaiKhachHangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loaiKhachHangService.remove(+id);
  }
}
