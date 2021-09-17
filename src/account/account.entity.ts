import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('account')
export class Account {

    @PrimaryGeneratedColumn()
    seq: number;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    pass: string;

}