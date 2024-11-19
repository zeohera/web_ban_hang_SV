import { Test, TestingModule } from '@nestjs/testing';
import { ChiTietHoaDonController } from './chi-tiet-hoa-don.controller';
import { ChiTietHoaDonService } from './chi-tiet-hoa-don.service';

describe('ChiTietHoaDonController', () => {
  let controller: ChiTietHoaDonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChiTietHoaDonController],
      providers: [ChiTietHoaDonService],
    }).compile();

    controller = module.get<ChiTietHoaDonController>(ChiTietHoaDonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
