import { Test, TestingModule } from '@nestjs/testing';
import { LoaiKhachHangService } from './loai-khach-hang.service';

describe('LoaiKhachHangService', () => {
  let service: LoaiKhachHangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoaiKhachHangService],
    }).compile();

    service = module.get<LoaiKhachHangService>(LoaiKhachHangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
