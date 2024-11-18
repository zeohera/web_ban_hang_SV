import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 256 })
  fullName: string;

  @Column({ type: 'varchar', length: 256 })
  address: string;

  @Column({ type: 'datetime' })
  dob: Date;

  @Exclude()
  @Column({ type: 'varchar', length: 256, default: 'user' })
  role: string;

  @Column({ type: 'varchar', length: 256, unique: true })
  email: string;

  @Exclude()
  @Column({ type: 'varchar', length: 256 })
  password: string;
}
