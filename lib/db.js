import mysql from "mysql2/promise";

export async function query ({query,values = []}) {

    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "kuna_db",
        // localhost:3306,
        user: "root",
        password: "password",
        socketPath: "/tmp/mysql.sock"  
    });

    try {

    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results

    } catch (error) {
      throw Error(error.message);
      return { error };
    }
}