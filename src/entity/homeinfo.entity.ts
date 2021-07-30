import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('homeInfo')
export class HomeInfoEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  subject: string;

  @Column()
  floor: string;

  @Column()
  price: string;

  @Column()
  area: string;

  @Column()
  summary: string;

  @Column()
  content: string;

  @Column()
  thumbnailImagePath: string;

  @Column()
  creator: string;

  @Column()
  modifier: string;

  @Column()
  createdDate: Date;

  @Column()
  modifyDate: Date;
}
