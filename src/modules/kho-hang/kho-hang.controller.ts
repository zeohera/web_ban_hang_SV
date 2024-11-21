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
import { KhoHangService } from './kho-hang.service';
import { CreateKhoHangDto } from './dto/create-kho-hang.dto';
import { UpdateKhoHangDto } from './dto/update-kho-hang.dto';

import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/enums';

@Controller('kho-hang')
@ApiTags('kho-hang')
@ApiBearerAuth()
@UseGuards(AuthGuard, RolesGuard)
@Roles(ROLES.Admin)
export class KhoHangController {
  constructor(private readonly khoHangService: KhoHangService) {}

  @Post()
  @ApiCreatedResponse()
  @ApiBadRequestResponse()
  @ApiBody({
    description: 'The data to create a new kho hang',
    examples: {
      KhoHang: {
        summary: 'Create a new kho hang',
        value: {
          ten: 'Kho hang moi',
          diaChi: '123 Le Van Sy',
          soDienThoai: '0123456789',
        },
      },
    },
  })
  create(@Body() createKhoHangDto: CreateKhoHangDto) {
    return this.khoHangService.create(createKhoHangDto);
  }

  @Get()
  @ApiOkResponse()
  findAll() {
    return this.khoHangService.findAll();
  }

  @Get(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  findOne(@Param('id') id: string) {
    return this.khoHangService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse()
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  @ApiBody({
    description: 'The data to update a kho hang',
    examples: {
      KhoHang: {
        summary: 'Update a kho hang',
        value: {
          ten: 'Kho hang moi',
          diaChi: '123 Le Van Sy',
          soDienThoai: '0123456789',
        },
      },
    },
  })
  update(@Param('id') id: string, @Body() updateKhoHangDto: UpdateKhoHangDto) {
    return this.khoHangService.update(+id, updateKhoHangDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  remove(@Param('id') id: string) {
    return this.khoHangService.remove(+id);
  }
}
