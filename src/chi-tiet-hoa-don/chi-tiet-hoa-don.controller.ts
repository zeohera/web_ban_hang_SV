import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChiTietHoaDonService } from './chi-tiet-hoa-don.service';
import { CreateChiTietHoaDonDto } from './dto/create-chi-tiet-hoa-don.dto';
import { UpdateChiTietHoaDonDto } from './dto/update-chi-tiet-hoa-don.dto';

@Controller('chi-tiet-hoa-don')
export class ChiTietHoaDonController {
  constructor(private readonly chiTietHoaDonService: ChiTietHoaDonService) {}

  @Post()
  create(@Body() createChiTietHoaDonDto: CreateChiTietHoaDonDto) {
    return this.chiTietHoaDonService.create(createChiTietHoaDonDto);
  }

  @Get()
  findAll() {
    return this.chiTietHoaDonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chiTietHoaDonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChiTietHoaDonDto: UpdateChiTietHoaDonDto) {
    return this.chiTietHoaDonService.update(+id, updateChiTietHoaDonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chiTietHoaDonService.remove(+id);
  }
}
