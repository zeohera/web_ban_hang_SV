import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async login(loginData: LoginDto) {
    const user = await this.userService.findOneUserBy({
      email: loginData.email,
    });
    if (!compareSync(loginData.password, user.password)) {
      throw new BadRequestException('email or password incorect');
    }
    const accessToken = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });
    return {
      accessToken,
      user,
    };
  }
}
