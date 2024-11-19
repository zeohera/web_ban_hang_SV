import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HoaDonService } from './hoa-don.service';
import { CreateHoaDonDto } from './dto/create-hoa-don.dto';
import { UpdateHoaDonDto } from './dto/update-hoa-don.dto';

@Controller('hoa-don')
export class HoaDonController {
  constructor(private readonly hoaDonService: HoaDonService) {}

  @Post()
  create(@Body() createHoaDonDto: CreateHoaDonDto) {
    return this.hoaDonService.create(createHoaDonDto);
  }

  @Get()
  findAll() {
    return this.hoaDonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hoaDonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHoaDonDto: UpdateHoaDonDto) {
    return this.hoaDonService.update(+id, updateHoaDonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hoaDonService.remove(+id);
  }
}
