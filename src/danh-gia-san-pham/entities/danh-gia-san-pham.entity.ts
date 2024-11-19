import { NguoiDung } from 'src/nguoi-dung/entities/nguoi-dung.entity';
import { SanPham } from 'src/san-pham/entities/san-pham.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('DanhGiaSanPham')
export class DanhGiaSanPham {
  @PrimaryGeneratedColumn()
  IdDanhGia: number;

  @Column({ type: 'int' })
  Diem: number;

  @Column({ type: 'nvarchar', length: 400 })
  NoiDungDanhGia: string;

  @Column({ type: 'date' })
  NgayDanhGia: Date;

  @ManyToOne(() => SanPham, (sanPham) => sanPham.danhGiaSanPhams)
  IdSanPham: SanPham;

  @ManyToOne(() => NguoiDung, (nguoiDung) => nguoiDung.IdNguoiDung)
  IdNguoiDung: NguoiDung;
}
