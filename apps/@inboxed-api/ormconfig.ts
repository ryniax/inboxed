import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions[] = [
  {
    name: 'development',
    type: 'postgres',
    host: 'localhost',
    port: 5000,
    username: 'root',
    password: 'root',
    database: 'db_inboxed_dev',
    synchronize: true,
    logging: true,
    entities: ['./src/models/*.ts'],
  },
  {
    name: 'test',
    type: 'postgres',
    host: 'localhost',
    port: 5000,
    username: 'root',
    password: 'root',
    database: 'db_inboxed_test',
    synchronize: true,
    logging: true,
    entities: ['./src/models/*.ts'],
    dropSchema: true,
  },
];

module.exports = connectionOptions;
