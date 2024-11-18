import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import configuration from 'src/common/configuration';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: configuration.jwt.jwtSecret,
      signOptions: { expiresIn: configuration.jwt.jwtExpiresIn },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
