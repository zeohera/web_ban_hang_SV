import { Test, TestingModule } from '@nestjs/testing';
import { NhaCungCapService } from './nha-cung-cap.service';

describe('NhaCungCapService', () => {
  let service: NhaCungCapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NhaCungCapService],
    }).compile();

    service = module.get<NhaCungCapService>(NhaCungCapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
