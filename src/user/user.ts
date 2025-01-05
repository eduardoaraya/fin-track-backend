import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { IUser } from './user.interface';

@Entity()
export class User extends BaseEntity implements IUser {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column({ default: true })
    isActive: boolean;
}
