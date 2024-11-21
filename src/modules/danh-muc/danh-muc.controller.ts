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
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('danh-muc')
@Controller('danh-muc')
@ApiBearerAuth()
@UseGuards(AuthGuard)
export class DanhMucController {
  constructor(private readonly danhMucService: DanhMucService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Create danh muc' })
  @ApiBody({
    description: 'Danh muc data',
    type: CreateDanhMucDto,
    examples: {
      danhMuc: {
        value: {
          TenDanhMuc: 'Danh muc 1',
        },
        description: 'Danh muc data',
      },
    },
  })
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
  @ApiBody({
    description: 'Danh muc data',
    type: UpdateDanhMucDto,
    examples: {
      danhMuc: {
        value: {
          TenDanhMuc: 'Danh muc 1',
        },
        description: 'Danh muc data',
      },
    },
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
