import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('accountInfo')
export class AccountInfoEntity {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  pass: string;
}