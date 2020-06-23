import { Connection, createConnection } from "typeorm";

//Create a connection to the database using the default connection parameters in ormconfig.json file
export async function connectToDb(): Promise<Connection>{
    return await createConnection();
}
