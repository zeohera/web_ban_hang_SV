import { HoaDon } from 'src/hoa-don/entities/hoa-don.entity';
import { SanPham } from 'src/san-pham/entities/san-pham.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
@Entity('ChiTietHoaDon')
export class ChiTietHoaDon {
  @PrimaryGeneratedColumn()
  IdChiTietHoaDon: number;

  @Column({ type: 'int' })
  SoLuongMua: number;

  @ManyToOne(() => HoaDon, (hoaDon) => hoaDon.chiTietHoaDons)
  IdHoaDon: HoaDon;

  @ManyToOne(() => SanPham, (sanPham) => sanPham.chiTietHoaDons)
  IdSanPham: SanPham;
}
