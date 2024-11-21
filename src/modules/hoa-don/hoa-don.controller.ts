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
import { HoaDonService } from './hoa-don.service';
import { CreateHoaDonDto } from './dto/create-hoa-don.dto';
import { UpdateHoaDonDto } from './dto/update-hoa-don.dto';
import { AuthGuard } from '../auth/auth.guard';
import { Roles } from 'src/common/decorators';
import { ROLES } from 'src/common/enums';
import { RolesGuard } from '../auth/role.guard';

@ApiTags('hoa-don')
@Controller('hoa-don')
@ApiBearerAuth()
@UseGuards(AuthGuard, RolesGuard)
@Roles(ROLES.Admin)
export class HoaDonController {
  constructor(private readonly hoaDonService: HoaDonService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new hoa don' })
  @ApiCreatedResponse({
    description: 'The hoa don has been successfully created.',
  })
  @ApiBadRequestResponse({ description: 'Invalid data.' })
  @ApiBody({
    description: 'Hoa don data.',
    examples: {
      a: {
        summary: 'Example hoa don data',
        value: {
          maHoaDon: 1,
          maKhachHang: 1,
          maNhanVien: 1,
          tongTien: 100000,
        },
      },
    },
  })
  create(@Body() createHoaDonDto: CreateHoaDonDto) {
    return this.hoaDonService.create(createHoaDonDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all hoa dons' })
  @ApiOkResponse({ description: 'List of hoa dons.' })
  findAll() {
    return this.hoaDonService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a hoa don by id' })
  @ApiOkResponse({ description: 'The hoa don.' })
  @ApiNotFoundResponse({ description: 'Hoa don not found.' })
  findOne(@Param('id') id: string) {
    return this.hoaDonService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a hoa don' })
  @ApiOkResponse({ description: 'The hoa don has been successfully updated.' })
  @ApiNotFoundResponse({ description: 'Hoa don not found.' })
  @ApiBadRequestResponse({ description: 'Invalid data.' })
  @ApiBody({
    description: 'Hoa don data.',
    examples: {
      a: {
        summary: 'Example hoa don data',
        value: {
          maHoaDon: 1,
          maKhachHang: 1,
          maNhanVien: 1,
          tongTien: 100000,
        },
      },
    },
  })
  update(@Param('id') id: string, @Body() updateHoaDonDto: UpdateHoaDonDto) {
    return this.hoaDonService.update(+id, updateHoaDonDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a hoa don' })
  @ApiOkResponse({ description: 'The hoa don has been successfully deleted.' })
  @ApiNotFoundResponse({ description: 'Hoa don not found.' })
  remove(@Param('id') id: string) {
    return this.hoaDonService.remove(+id);
  }
}
