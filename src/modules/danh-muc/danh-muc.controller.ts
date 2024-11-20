import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DanhMucService } from './danh-muc.service';
import { CreateDanhMucDto } from './dto/create-danh-muc.dto';
import { UpdateDanhMucDto } from './dto/update-danh-muc.dto';

import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('danh-muc')
@Controller('danh-muc')
export class DanhMucController {
  constructor(private readonly danhMucService: DanhMucService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Create danh muc' })
  create(@Body() createDanhMucDto: CreateDanhMucDto) {
    return this.danhMucService.create(createDanhMucDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Get danh muc list' })
  findAll() {
    return this.danhMucService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Get danh muc by id' })
  @ApiNotFoundResponse({ description: 'Danh muc not found' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Danh muc id',
    example: 1,
    required: true,
  })
  findOne(@Param('id') id: string) {
    return this.danhMucService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Update danh muc' })
  @ApiNotFoundResponse({ description: 'Danh muc not found' })
  @ApiBadRequestResponse({ description: 'Invalid danh muc data' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Danh muc id',
    example: 1,
    required: true,
  })
  update(@Param('id') id: string, @Body() updateDanhMucDto: UpdateDanhMucDto) {
    return this.danhMucService.update(+id, updateDanhMucDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Delete danh muc' })
  @ApiNotFoundResponse({ description: 'Danh muc not found' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'Danh muc id',
    example: 1,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.danhMucService.remove(+id);
  }
}
