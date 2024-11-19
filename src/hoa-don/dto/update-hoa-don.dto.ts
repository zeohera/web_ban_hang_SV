import { PartialType } from '@nestjs/swagger';
import { CreateHoaDonDto } from './create-hoa-don.dto';

export class UpdateHoaDonDto extends PartialType(CreateHoaDonDto) {}
