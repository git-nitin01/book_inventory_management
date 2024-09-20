// creating database
import { createConnection } from 'mysql2/promise';
import dotenv from 'dotenv'
dotenv.config()

const connectionParams = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
}
const connectionDB = 'booksDB'
createConnection(connectionParams)
.then((connection) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${connectionDB}`)
    // change date storage format
    .then(() => {
        console.log('Database created successfully');
    })
    .catch((error) => {
        console.log('Error creating database:', error);
    })
    .finally(() => {
        connection.end();
    })
})
