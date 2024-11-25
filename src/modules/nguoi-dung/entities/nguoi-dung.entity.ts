import { LoaiKhachHang } from 'src/modules/loai-khach-hang/entities/loai-khach-hang.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('NguoiDung')
export class NguoiDung {
  @PrimaryGeneratedColumn()
  IdNguoiDung: number;

  @Column({ type: 'char', length: 10 })
  SoDienThoai: string;

  @Column({ type: 'varchar', length: 256 })
  MatKhau: string;

  @Column({ type: 'varchar', length: 50 })
  Email: string;

  @Column({ type: 'nvarchar', length: 30 })
  Quyen: string;

  @ManyToOne(() => LoaiKhachHang, (loaiKhachHang) => loaiKhachHang.nguoiDungs)
  IdLoaiKhach: LoaiKhachHang;
}
