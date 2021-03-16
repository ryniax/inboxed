import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserType } from '@inboxed/common';

@Entity('Users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  nickname!: string;

  @Column({ nullable: true, unique: true })
  email!: string;

  @Column({ nullable: true })
  password!: string;

  @Column({ type: 'enum', enum: UserType, default: UserType.GUEST })
  userType!: UserType;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
