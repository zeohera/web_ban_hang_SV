import { Test, TestingModule } from '@nestjs/testing';
import { DanhGiaSanPhamController } from './danh-gia-san-pham.controller';
import { DanhGiaSanPhamService } from './danh-gia-san-pham.service';

describe('DanhGiaSanPhamController', () => {
  let controller: DanhGiaSanPhamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DanhGiaSanPhamController],
      providers: [DanhGiaSanPhamService],
    }).compile();

    controller = module.get<DanhGiaSanPhamController>(DanhGiaSanPhamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
