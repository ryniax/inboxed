/* eslint-disable import/no-cycle */
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserType } from '@inboxed/common';
import { Server } from './Server';

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

  @ManyToMany(() => Server, (server) => server.users, { cascade: true })
  @JoinTable({ name: 'Users_Servers_Association' })
  servers!: Server[];

  @ManyToMany(() => Server, (server) => server.admins, { cascade: true, eager: true })
  @JoinTable({ name: 'Admins_Servers_Association' })
  ownedServers!: Server[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
