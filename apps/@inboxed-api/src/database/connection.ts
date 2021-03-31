import { createConnection, Connection } from 'typeorm';
import Logger from '../providers/logger';
import { accessEnv } from '../utils/accessEnv';

export const connectDatabase = async (): Promise<Connection> => {
  try {
    const connectionName = accessEnv('NODE_ENV');
    const connection: Connection = await createConnection(connectionName);

    Logger.info('Database connected.');
    return connection;
  } catch (error) {
    Logger.error(error);
    return process.exit(1);
  }
};
