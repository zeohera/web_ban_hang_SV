import { PartialType } from '@nestjs/swagger';
import { CreateKhoHangDto } from './create-kho-hang.dto';

export class UpdateKhoHangDto extends PartialType(CreateKhoHangDto) {}
