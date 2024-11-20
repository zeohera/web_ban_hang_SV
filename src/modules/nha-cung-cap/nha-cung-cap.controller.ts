import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiOkResponse, ApiNotFoundResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { NhaCungCapService } from './nha-cung-cap.service';
import { CreateNhaCungCapDto } from './dto/create-nha-cung-cap.dto';
import { UpdateNhaCungCapDto } from './dto/update-nha-cung-cap.dto';

@ApiTags('nha-cung-cap')
@Controller('nha-cung-cap')
export class NhaCungCapController {
  constructor(private readonly nhaCungCapService: NhaCungCapService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new NhaCungCap' })
  @ApiCreatedResponse({ description: 'The record has been successfully created.' })
  @ApiBadRequestResponse({ description: 'Invalid input.' })
  create(@Body() createNhaCungCapDto: CreateNhaCungCapDto) {
    return this.nhaCungCapService.create(createNhaCungCapDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all NhaCungCap records' })
  @ApiOkResponse({ description: 'List of NhaCungCap records.' })
  findAll() {
    return this.nhaCungCapService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single NhaCungCap by id' })
  @ApiOkResponse({ description: 'The found NhaCungCap record.' })
  @ApiNotFoundResponse({ description: 'Record not found.' })
  findOne(@Param('id') id: string) {
    return this.nhaCungCapService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a NhaCungCap by id' })
  @ApiOkResponse({ description: 'The record has been successfully updated.' })
  @ApiBadRequestResponse({ description: 'Invalid input.' })
  @ApiNotFoundResponse({ description: 'Record not found.' })
  update(@Param('id') id: string, @Body() updateNhaCungCapDto: UpdateNhaCungCapDto) {
    return this.nhaCungCapService.update(+id, updateNhaCungCapDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a NhaCungCap by id' })
  @ApiOkResponse({ description: 'The record has been successfully deleted.' })
  @ApiNotFoundResponse({ description: 'Record not found.' })
  remove(@Param('id') id: string) {
    return this.nhaCungCapService.remove(+id);
  }
}
