import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { NguoiDungRepository } from '../nguoi-dung/nguoi-dung.repository';
import { NguoiDungService } from '../nguoi-dung/nguoi-dung.service';

@Injectable()
export class AuthService {
  constructor(
    private nguoiDungRepository: NguoiDungService,
    private readonly jwtService: JwtService,
  ) {}
  async login(loginData: LoginDto) {
    const user = await this.nguoiDungRepository.findOneUserBy({
      Email: loginData.Email,
    });
    if (!compareSync(loginData.MatKhau, user.MatKhau)) {
      throw new BadRequestException('email or password incorrect');
    }
    const accessToken = this.jwtService.sign({
      sub: user.IdNguoiDung,
      email: user.Email,
    });
    return {
      accessToken,
      user,
    };
  }
}
