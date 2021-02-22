import { createConnection, Connection } from 'typeorm';
import Logger from '../providers/logger';

export const connectDatabase = async (): Promise<Connection> => {
  try {
    const connection: Connection = await createConnection();
    Logger.info('Database connected.');

    return connection;
  } catch (error) {
    Logger.error(error);
    return process.exit(1);
  }
};
