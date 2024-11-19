import { SanPham } from 'src/san-pham/entities/san-pham.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('NhaCungCap')
export class NhaCungCap {
  @PrimaryGeneratedColumn()
  IdNhaCungCap: number;

  @Column({ type: 'nvarchar', length: 100 })
  TenNhaCungCap: string;

  @Column({ type: 'nvarchar', length: 300 })
  DiaChi: string;

  @OneToMany(() => SanPham, (sanPham) => sanPham.IdNhaCungCap)
  sanPhams: SanPham[];
}
