import { ChiTietHoaDon } from 'src/modules/chi-tiet-hoa-don/entities/chi-tiet-hoa-don.entity';
import { NguoiDung } from 'src/modules/nguoi-dung/entities/nguoi-dung.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('HoaDon')
export class HoaDon {
  @PrimaryGeneratedColumn()
  IdHoaDon: number;

  @Column({ type: 'nvarchar', length: 500 })
  DiaChiGiaoHang: string;

  @Column({ type: 'nvarchar', length: 100 })
  HinhThucThanhToan: string;

  @Column({ type: 'date' })
  NgayTaoDon: Date;

  @Column({ type: 'decimal' })
  TongTien: number;

  @ManyToOne(() => NguoiDung, (nguoiDung) => nguoiDung.IdNguoiDung)
  IdNguoiDung: NguoiDung;

  @OneToMany(() => ChiTietHoaDon, (chiTietHoaDon) => chiTietHoaDon.IdHoaDon)
  chiTietHoaDons: ChiTietHoaDon[];
}
