import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("users")

export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    username: string;

    @Column("text")
    email: string;

    @Column("text")
    phone_number: string;

    @Column("text")
    password: string;

    @Column("text", { default: false })
    confirmEmail: boolean;
}