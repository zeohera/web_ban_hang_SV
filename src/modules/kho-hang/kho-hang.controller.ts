import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
} from '@nestjs/swagger';

@Controller('kho-hang')
@ApiTags('kho-hang')
export class KhoHangController {
  constructor(private readonly khoHangService: KhoHangService) {}

  @Post()
  @ApiCreatedResponse()
  @ApiBadRequestResponse()
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
