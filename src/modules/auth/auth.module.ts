import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import configuration from 'src/common/configuration';
import { NguoiDungModule } from '../nguoi-dung/nguoi-dung.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: configuration.jwt.jwtSecret,
      signOptions: { expiresIn: configuration.jwt.jwtExpiresIn },
    }),
    NguoiDungModule,
  ],

  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
