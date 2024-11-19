import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DanhGiaSanPhamService } from './danh-gia-san-pham.service';
import { CreateDanhGiaSanPhamDto } from './dto/create-danh-gia-san-pham.dto';
import { UpdateDanhGiaSanPhamDto } from './dto/update-danh-gia-san-pham.dto';

@Controller('danh-gia-san-pham')
export class DanhGiaSanPhamController {
  constructor(private readonly danhGiaSanPhamService: DanhGiaSanPhamService) {}

  @Post()
  create(@Body() createDanhGiaSanPhamDto: CreateDanhGiaSanPhamDto) {
    return this.danhGiaSanPhamService.create(createDanhGiaSanPhamDto);
  }

  @Get()
  findAll() {
    return this.danhGiaSanPhamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.danhGiaSanPhamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDanhGiaSanPhamDto: UpdateDanhGiaSanPhamDto) {
    return this.danhGiaSanPhamService.update(+id, updateDanhGiaSanPhamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.danhGiaSanPhamService.remove(+id);
  }
}
