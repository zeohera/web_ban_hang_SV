import { PartialType } from '@nestjs/swagger';
import { CreateNhaCungCapDto } from './create-nha-cung-cap.dto';

export class UpdateNhaCungCapDto extends PartialType(CreateNhaCungCapDto) {}
