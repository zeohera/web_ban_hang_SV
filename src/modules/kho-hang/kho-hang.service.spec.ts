import { Test, TestingModule } from '@nestjs/testing';
import { KhoHangService } from './kho-hang.service';

describe('KhoHangService', () => {
  let service: KhoHangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KhoHangService],
    }).compile();

    service = module.get<KhoHangService>(KhoHangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
