import { Test, TestingModule } from '@nestjs/testing';
import { KhoHangController } from './kho-hang.controller';
import { KhoHangService } from './kho-hang.service';

describe('KhoHangController', () => {
  let controller: KhoHangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KhoHangController],
      providers: [KhoHangService],
    }).compile();

    controller = module.get<KhoHangController>(KhoHangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
