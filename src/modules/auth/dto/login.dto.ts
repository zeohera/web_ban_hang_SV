import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class LoginDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsEmail()
  Email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  MatKhau: string;
}
