import { Test, TestingModule } from '@nestjs/testing';
import { LoaiKhachHangController } from './loai-khach-hang.controller';
import { LoaiKhachHangService } from './loai-khach-hang.service';

describe('LoaiKhachHangController', () => {
  let controller: LoaiKhachHangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoaiKhachHangController],
      providers: [LoaiKhachHangService],
    }).compile();

    controller = module.get<LoaiKhachHangController>(LoaiKhachHangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
