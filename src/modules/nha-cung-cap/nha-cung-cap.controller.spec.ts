import { Test, TestingModule } from '@nestjs/testing';
import { NhaCungCapController } from './nha-cung-cap.controller';
import { NhaCungCapService } from './nha-cung-cap.service';

describe('NhaCungCapController', () => {
  let controller: NhaCungCapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NhaCungCapController],
      providers: [NhaCungCapService],
    }).compile();

    controller = module.get<NhaCungCapController>(NhaCungCapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
