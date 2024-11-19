import { SanPham } from 'src/modules/san-pham/entities/san-pham.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('DanhMuc')
export class DanhMuc {
  @PrimaryGeneratedColumn()
  IdDanhMuc: number;

  @Column({ type: 'nvarchar', length: 50 })
  TenDanhMuc: string;

  @OneToMany(() => SanPham, (sanPham) => sanPham.IdDanhMuc)
  sanPhams: SanPham[];
}
