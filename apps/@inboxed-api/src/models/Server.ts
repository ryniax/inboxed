/* eslint-disable import/no-cycle */
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Channel } from './Channel';
import { User } from './User';

@Entity('Servers')
export class Server extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  slug!: string;

  @ManyToMany(() => User, (user) => user.servers)
  users!: User[];

  @ManyToMany(() => User, (user) => user.ownedServers)
  admins!: User[];

  @OneToMany(() => Channel, (channel) => channel.server)
  channels!: Channel[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
