import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { LoaiKhachHangService } from './loai-khach-hang.service';
import { CreateLoaiKhachHangDto } from './dto/create-loai-khach-hang.dto';
import { UpdateLoaiKhachHangDto } from './dto/update-loai-khach-hang.dto';

@ApiTags('loai-khach-hang')
@Controller('loai-khach-hang')
export class LoaiKhachHangController {
  constructor(private readonly loaiKhachHangService: LoaiKhachHangService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new LoaiKhachHang' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({ description: 'Invalid data.' })
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
