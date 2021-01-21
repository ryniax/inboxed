import { createConnection, Connection } from 'typeorm';

export const connectDatabase = async () : Promise<Connection> => {
    try {
        const connection: Connection = await createConnection()
        console.log(`Database connected.`);
        
        return connection;
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}