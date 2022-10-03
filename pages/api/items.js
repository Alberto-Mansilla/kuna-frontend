import mysql from "mysql2/promise";

export default async function handler(req, res) {

    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "kuna_db",
        // localhost:3306,
        user: "root",
        password: "password",
        socketPath: "/tmp/mysql.sock" 
    })

    try {

    const query = "SELECT item_id, name_item, desc_item, price, size FROM items"
    const values = []
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();

    res.status(200).json ({ items : data });
    } catch (error) { 
        
    // res.status(500).json({error: error.message});
    }
}