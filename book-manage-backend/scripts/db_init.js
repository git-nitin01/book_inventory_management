// Init database connection
import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const connectionParams = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
}
const connectionDB = 'booksDB'
const sqlServer = new Sequelize(connectionDB, connectionParams.user, connectionParams.password, {
    host: connectionParams.host,
    dialect: 'mysql'
})

const connectSQLServer = async () => await sqlServer.authenticate();

export { connectSQLServer, sqlServer };