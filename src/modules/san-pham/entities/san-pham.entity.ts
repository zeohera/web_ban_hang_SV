
import { ChiTietHoaDon } from 'src/modules/chi-tiet-hoa-don/entities/chi-tiet-hoa-don.entity';
import { DanhGiaSanPham } from 'src/modules/danh-gia-san-pham/entities/danh-gia-san-pham.entity';
import { DanhMuc } from 'src/modules/danh-muc/entities/danh-muc.entity';
import { KhoHang } from 'src/modules/kho-hang/entities/kho-hang.entity';
import { NhaCungCap } from 'src/modules/nha-cung-cap/entities/nha-cung-cap.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('SanPham')
export class SanPham {
  @PrimaryGeneratedColumn()
  IdSanPham: number;

  @Column({ type: 'nvarchar', length: 200 })
  TenSanPham: string;

  @Column({ type: 'varchar', length: 200 })
  AnhSanPham: string;

  @Column({ type: 'nvarchar', length: 500 })
  MoTa: string;

  @Column({ type: 'decimal' })
  GiaKhuyenMai: number;

  @Column({ type: 'decimal' })
  GiaBan: number;

  @Column({ type: 'decimal' })
  GiaNhap: number;

  @Column({ type: 'nvarchar', length: 30 })
  TrangThai: string;

  @ManyToOne(() => DanhMuc, (danhMuc) => danhMuc.sanPhams)
  IdDanhMuc: DanhMuc;

  @ManyToOne(() => NhaCungCap, (nhaCungCap) => nhaCungCap.sanPhams)
  IdNhaCungCap: NhaCungCap;

  @OneToMany(() => KhoHang, (khoHang) => khoHang.IdSanPham)
  khoHangs: KhoHang[];

  @OneToMany(() => DanhGiaSanPham, (danhGia) => danhGia.IdSanPham)
  danhGiaSanPhams: DanhGiaSanPham[];

  @OneToMany(() => ChiTietHoaDon, (chiTietHoaDon) => chiTietHoaDon.IdSanPham)
  chiTietHoaDons: ChiTietHoaDon[];
}
