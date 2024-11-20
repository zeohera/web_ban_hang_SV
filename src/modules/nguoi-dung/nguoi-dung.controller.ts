import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NguoiDungService } from './nguoi-dung.service';
import { CreateNguoiDungDto } from './dto/create-nguoi-dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi-dung.dto';

import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

@ApiTags('nguoi-dung')
@Controller('nguoi-dung')
export class NguoiDungController {
  constructor(private readonly nguoiDungService: NguoiDungService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiCreatedResponse({
    description: 'The user has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'Bad request. Please check your data.',
  })
  create(@Body() createNguoiDungDto: CreateNguoiDungDto) {
    return this.nguoiDungService.create(createNguoiDungDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({ description: 'Get all users.' })
  findAll() {
    return this.nguoiDungService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by id' })
  @ApiOkResponse({ description: 'Get a user by id.' })
  @ApiNotFoundResponse({ description: 'User not found.' })
  findOne(@Param('id') id: string) {
    return this.nguoiDungService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a user' })
  @ApiOkResponse({ description: 'The user has been successfully updated.' })
  @ApiNotFoundResponse({ description: 'User not found.' })
  @ApiBadRequestResponse({
    description: 'Bad request. Please check your data.',
  })
  update(
    @Param('id') id: string,
    @Body() updateNguoiDungDto: UpdateNguoiDungDto,
  ) {
    return this.nguoiDungService.update(+id, updateNguoiDungDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user' })
  @ApiOkResponse({ description: 'The user has been successfully deleted.' })
  @ApiNotFoundResponse({ description: 'User not found.' })
  remove(@Param('id') id: string) {
    return this.nguoiDungService.remove(+id);
  }
}
