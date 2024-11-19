import { NguoiDung } from 'src/nguoi-dung/entities/nguoi-dung.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('LoaiKhachHang')
export class LoaiKhachHang {
  @PrimaryGeneratedColumn()
  IdLoaiKhach: number;

  @Column({ type: 'nvarchar', length: 30 })
  PhanLoai: string;

  @Column({ type: 'decimal', precision: 18, scale: 0 })
  MucTien: number;

  @OneToMany(() => NguoiDung, (nguoiDung) => nguoiDung.IdLoaiKhach)
  nguoiDungs: NguoiDung[];
}
