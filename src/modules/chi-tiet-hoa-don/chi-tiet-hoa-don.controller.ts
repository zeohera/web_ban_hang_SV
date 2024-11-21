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
import { ChiTietHoaDonService } from './chi-tiet-hoa-don.service';
import { CreateChiTietHoaDonDto } from './dto/create-chi-tiet-hoa-don.dto';
import { UpdateChiTietHoaDonDto } from './dto/update-chi-tiet-hoa-don.dto';

import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiBody,
} from '@nestjs/swagger';

import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@Controller('chi-tiet-hoa-don')
@ApiTags('ChiTietHoaDon')
@ApiBearerAuth()
@UseGuards(AuthGuard)
export class ChiTietHoaDonController {
  constructor(private readonly chiTietHoaDonService: ChiTietHoaDonService) {}

  @Post()
  @ApiOperation({ summary: 'Create chiTietHoaDon' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'Bad request. Please check the request body validation errors',
  })
  @ApiInternalServerErrorResponse({
    description: 'An unexpected error occured while processing the request',
  })
  @ApiBody({
    description: 'The request body should contain the chiTietHoaDon data',
    examples: {
      chiTietHoaDon: {
        summary: 'ChiTietHoaDon data',
        value: {
          IdHoaDon: 1,
          IdSanPham: 1,
          SoLuongMua: 1,
        },
      },
    },
  })
  create(@Body() createChiTietHoaDonDto: CreateChiTietHoaDonDto) {
    return this.chiTietHoaDonService.create(createChiTietHoaDonDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all chiTietHoaDon' })
  @ApiOkResponse({
    description: 'The records have been successfully returned.',
  })
  findAll() {
    return this.chiTietHoaDonService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one chiTietHoaDon' })
  @ApiOkResponse({ description: 'The record has been successfully returned.' })
  @ApiNotFoundResponse({ description: 'The record does not exist' })
  findOne(@Param('id') id: string) {
    return this.chiTietHoaDonService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update chiTietHoaDon' })
  @ApiOkResponse({ description: 'The record has been successfully updated.' })
  @ApiBadRequestResponse({
    description: 'Bad request. Please check the request body validation errors',
  })
  @ApiNotFoundResponse({ description: 'The record does not exist' })
  @ApiBody({
    description: 'The request body should contain the chiTietHoaDon data',
    examples: {
      chiTietHoaDon: {
        summary: 'ChiTietHoaDon data',
        value: {
          SoLuongMua: 1,
        } as UpdateChiTietHoaDonDto,
      },
    },
  })
  update(
    @Param('id') id: string,
    @Body() updateChiTietHoaDonDto: UpdateChiTietHoaDonDto,
  ) {
    return this.chiTietHoaDonService.update(+id, updateChiTietHoaDonDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete chiTietHoaDon' })
  @ApiOkResponse({ description: 'The record has been successfully deleted.' })
  @ApiNotFoundResponse({ description: 'The record does not exist' })
  remove(@Param('id') id: string) {
    return this.chiTietHoaDonService.remove(+id);
  }
}
