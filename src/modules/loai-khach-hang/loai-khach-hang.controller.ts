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
import { LoaiKhachHangService } from './loai-khach-hang.service';
import { CreateLoaiKhachHangDto } from './dto/create-loai-khach-hang.dto';
import { UpdateLoaiKhachHangDto } from './dto/update-loai-khach-hang.dto';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/enums';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/role.guard';

@ApiTags('loai-khach-hang')
@Controller('loai-khach-hang')
@ApiBearerAuth()
@UseGuards(AuthGuard, RolesGuard)
@Roles(ROLES.Admin)
export class LoaiKhachHangController {
  constructor(private readonly loaiKhachHangService: LoaiKhachHangService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new LoaiKhachHang' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({ description: 'Invalid data.' })
  @ApiBody({
    description: 'Create LoaiKhachHang',
    examples: {
      foo: {
        summary: 'a LoaiKhachHang example',
        value: {
          PhanLoai: 'KhachHang',
          MucTien: 100,
        },
      },
    },
  })
  create(@Body() createLoaiKhachHangDto: CreateLoaiKhachHangDto) {
    return this.loaiKhachHangService.create(createLoaiKhachHangDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all LoaiKhachHang' })
  @ApiOkResponse({ description: 'Successfully retrieved records.' })
  findAll() {
    return this.loaiKhachHangService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a LoaiKhachHang by ID' })
  @ApiOkResponse({ description: 'Successfully retrieved record.' })
  @ApiNotFoundResponse({ description: 'Record not found.' })
  findOne(@Param('id') id: string) {
    return this.loaiKhachHangService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a LoaiKhachHang by ID' })
  @ApiOkResponse({ description: 'Successfully updated record.' })
  @ApiNotFoundResponse({ description: 'Record not found.' })
  @ApiBadRequestResponse({ description: 'Invalid data.' })
  @ApiBody({
    description: 'Update LoaiKhachHang',
    examples: {
      foo: {
        summary: 'a LoaiKhachHang example',
        value: {
          PhanLoai: 'KhachHang',
          MucTien: 100,
        },
      },
    },
  })
  update(
    @Param('id') id: string,
    @Body() updateLoaiKhachHangDto: UpdateLoaiKhachHangDto,
  ) {
    return this.loaiKhachHangService.update(+id, updateLoaiKhachHangDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a LoaiKhachHang by ID' })
  @ApiOkResponse({ description: 'Successfully deleted record.' })
  @ApiNotFoundResponse({ description: 'Record not found.' })
  remove(@Param('id') id: string) {
    return this.loaiKhachHangService.remove(+id);
  }
}
