import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SanPhamService } from './san-pham.service';
import { CreateSanPhamDto } from './dto/create-san-pham.dto';
import { UpdateSanPhamDto } from './dto/update-san-pham.dto';

import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

@Controller('san-pham')
@ApiTags('san-pham')
export class SanPhamController {
  constructor(private readonly sanPhamService: SanPhamService) {}

  @Post()
  @ApiCreatedResponse()
  @ApiOperation({ summary: 'Create a san pham' })
  create(@Body() createSanPhamDto: CreateSanPhamDto) {
    return this.sanPhamService.create(createSanPhamDto);
  }

  @Get()
  @ApiOkResponse()
  @ApiOperation({ summary: 'Find all san pham' })
  findAll() {
    return this.sanPhamService.findAll();
  }

  @Get(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiOperation({ summary: 'Find a san pham' })
  findOne(@Param('id') id: string) {
    return this.sanPhamService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse()
  @ApiBadRequestResponse()
  @ApiOperation({ summary: 'Update a san pham' })
  update(@Param('id') id: string, @Body() updateSanPhamDto: UpdateSanPhamDto) {
    return this.sanPhamService.update(+id, updateSanPhamDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiOperation({ summary: 'Delete a san pham' })
  remove(@Param('id') id: string) {
    return this.sanPhamService.remove(+id);
  }
}
