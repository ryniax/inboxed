import { ConnectionOptions } from 'typeorm';
import { accessEnv } from './src/utils/accessEnv';

const isProduction = accessEnv('NODE_ENV') === 'production';

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: accessEnv('DEV_DB_HOST'),
  port: 5000,
  username: accessEnv('DEV_DB_USER'),
  password: accessEnv('DEV_DB_PASSWORD'),
  database: accessEnv('DEV_DB_NAME'),
  logging: !isProduction,
  synchronize: !isProduction,
  entities: ['./src/models/*.ts'],
};

module.exports = connectionOptions;
