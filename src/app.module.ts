import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import typeorm from './config/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { ChiTietHoaDonModule } from './modules/chi-tiet-hoa-don/chi-tiet-hoa-don.module';
import { DanhGiaSanPhamModule } from './modules/danh-gia-san-pham/danh-gia-san-pham.module';
import { DanhMucModule } from './modules/danh-muc/danh-muc.module';
import { HoaDonModule } from './modules/hoa-don/hoa-don.module';
import { KhoHangModule } from './modules/kho-hang/kho-hang.module';
import { LoaiKhachHangModule } from './modules/loai-khach-hang/loai-khach-hang.module';
import { NguoiDungModule } from './modules/nguoi-dung/nguoi-dung.module';
import { NhaCungCapModule } from './modules/nha-cung-cap/nha-cung-cap.module';
import { SanPhamModule } from './modules/san-pham/san-pham.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return configService.get('typeorm');
      },
    }),
    ChiTietHoaDonModule,
    DanhGiaSanPhamModule,
    DanhMucModule,
    HoaDonModule,
    KhoHangModule,
    LoaiKhachHangModule,
    NguoiDungModule,
    NhaCungCapModule,
    SanPhamModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
