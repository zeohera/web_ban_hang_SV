import { Test, TestingModule } from '@nestjs/testing';
import { HoaDonController } from './hoa-don.controller';
import { HoaDonService } from './hoa-don.service';

describe('HoaDonController', () => {
  let controller: HoaDonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HoaDonController],
      providers: [HoaDonService],
    }).compile();

    controller = module.get<HoaDonController>(HoaDonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
