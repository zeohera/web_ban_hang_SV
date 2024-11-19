import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KhoHangService } from './kho-hang.service';
import { CreateKhoHangDto } from './dto/create-kho-hang.dto';
import { UpdateKhoHangDto } from './dto/update-kho-hang.dto';

@Controller('kho-hang')
export class KhoHangController {
  constructor(private readonly khoHangService: KhoHangService) {}

  @Post()
  create(@Body() createKhoHangDto: CreateKhoHangDto) {
    return this.khoHangService.create(createKhoHangDto);
  }

  @Get()
  findAll() {
    return this.khoHangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.khoHangService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKhoHangDto: UpdateKhoHangDto) {
    return this.khoHangService.update(+id, updateKhoHangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.khoHangService.remove(+id);
  }
}
