import { Test, TestingModule } from '@nestjs/testing';
import { ChiTietHoaDonService } from './chi-tiet-hoa-don.service';

describe('ChiTietHoaDonService', () => {
  let service: ChiTietHoaDonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChiTietHoaDonService],
    }).compile();

    service = module.get<ChiTietHoaDonService>(ChiTietHoaDonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
