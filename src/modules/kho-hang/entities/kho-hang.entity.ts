import { SanPham } from 'src/modules/san-pham/entities/san-pham.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('KhoHang')
export class KhoHang {
  @PrimaryGeneratedColumn()
  IdKhoHang: number;

  @Column({ type: 'int' })
  SoLuongNhapVao: number;

  @Column({ type: 'int' })
  SoLuongBanRa: number;

  @Column({ type: 'int' })
  SoLuongTonKho: number;

  @ManyToOne(() => SanPham, (sanPham) => sanPham.khoHangs)
  IdSanPham: SanPham;
}
