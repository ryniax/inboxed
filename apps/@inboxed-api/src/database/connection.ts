import { createConnection, Connection, getConnectionOptions } from 'typeorm';
import Logger from '../providers/logger';
import { accessEnv } from '../utils/accessEnv';

export const connectDatabase = async (): Promise<Connection> => {
  try {
    const connectionEnv = accessEnv('NODE_ENV');
    const connectionOptions = await getConnectionOptions(connectionEnv);
    const connection: Connection = await createConnection({ ...connectionOptions, name: 'default' });

    Logger.info('Database connected.');
    return connection;
  } catch (error) {
    Logger.error(error);
    return process.exit(1);
  }
};
