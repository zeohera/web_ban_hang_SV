import { Test, TestingModule } from '@nestjs/testing';
import { DanhGiaSanPhamService } from './danh-gia-san-pham.service';

describe('DanhGiaSanPhamService', () => {
  let service: DanhGiaSanPhamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DanhGiaSanPhamService],
    }).compile();

    service = module.get<DanhGiaSanPhamService>(DanhGiaSanPhamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
