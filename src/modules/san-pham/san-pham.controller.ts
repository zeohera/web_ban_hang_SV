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
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/enums';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/role.guard';

@Controller('san-pham')
@ApiTags('san-pham')
@ApiBearerAuth()
@UseGuards(AuthGuard, RolesGuard)
@Roles(ROLES.Admin)
export class SanPhamController {
  constructor(private readonly sanPhamService: SanPhamService) {}

  @Post()
  @ApiCreatedResponse()
  @ApiOperation({ summary: 'Create a san pham' })
  @ApiBody({
    description: 'Create a san pham',
    examples: {
      sanPham: {
        summary: 'Create a san pham',
        value: {
          TenSanPham: 'San pham 1',
          AnhSanPham: '',
          MoTa: 'San pham 1',
          GiaKhuyenMai: 0,
          GiaBan: 100,
          GiaNhap: 0,
          TrangThai: 'HoatDong',
          IdDanhMuc: 1,
          IdNhaCungCap: 1,
        },
      },
    },
  })
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
  @ApiBody({
    description: 'Update a san pham',
    examples: {
      sanPham: {
        summary: 'Update a san pham',
        value: {
          TenSanPham: 'San pham 1',
          AnhSanPham: '',
          MoTa: 'San pham 1',
          GiaKhuyenMai: 0,
          GiaBan: 100,
          GiaNhap: 0,
          TrangThai: 'HoatDong',
          IdDanhMuc: 1,
          IdNhaCungCap: 1,
        },
      },
    },
  })
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
