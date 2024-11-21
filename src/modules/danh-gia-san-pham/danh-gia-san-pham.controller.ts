import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { DanhGiaSanPhamService } from './danh-gia-san-pham.service';
import { CreateDanhGiaSanPhamDto } from './dto/create-danh-gia-san-pham.dto';
import { UpdateDanhGiaSanPhamDto } from './dto/update-danh-gia-san-pham.dto';

import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('danh-gia-san-pham')
@Controller('danh-gia-san-pham')
export class DanhGiaSanPhamController {
  constructor(private readonly danhGiaSanPhamService: DanhGiaSanPhamService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new danh gia san pham' })
  @ApiCreatedResponse({ description: 'Created a new danh gia san pham' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiBody({
    type: CreateDanhGiaSanPhamDto,
    description: 'Danh gia san pham data',
    examples: {
      danhGiaSanPham: {
        value: {
          IdNhaCungCap: 1,
          IdSanPham: 1,
          NoiDung: 'This is a test',
        },
      },
    },
  })
  create(@Body() createDanhGiaSanPhamDto: CreateDanhGiaSanPhamDto) {
    return this.danhGiaSanPhamService.create(createDanhGiaSanPhamDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all danh gia san pham' })
  @ApiOkResponse({ description: 'Get all danh gia san pham' })
  findAll() {
    return this.danhGiaSanPhamService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a danh gia san pham by id' })
  @ApiOkResponse({ description: 'Get a danh gia san pham by id' })
  @ApiNotFoundResponse({ description: 'Danh gia san pham not found' })
  findOne(@Param('id') id: string) {
    return this.danhGiaSanPhamService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a danh gia san pham by id' })
  @ApiOkResponse({ description: 'Update a danh gia san pham by id' })
  @ApiNotFoundResponse({ description: 'Danh gia san pham not found' })
  @ApiBody({
    type: UpdateDanhGiaSanPhamDto,
    description: 'Updated danh gia san pham data',
    examples: {
      danhGiaSanPham: {
        value: {
          IdNhaCungCap: 1,
          IdSanPham: 1,
          NoiDung: 'This is a test',
        },
      },
    },
  })
  update(
    @Param('id') id: string,
    @Body() updateDanhGiaSanPhamDto: UpdateDanhGiaSanPhamDto,
  ) {
    return this.danhGiaSanPhamService.update(+id, updateDanhGiaSanPhamDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Delete a danh gia san pham by id' })
  @ApiOkResponse({ description: 'Delete a danh gia san pham by id' })
  @ApiNotFoundResponse({ description: 'Danh gia san pham not found' })
  remove(@Param('id') id: string) {
    return this.danhGiaSanPhamService.remove(+id);
  }
}
