import { sqlServer } from '../scripts/db_init.js';
import { DataTypes } from 'sequelize';
import Book from './book.model.js';

const Stock = sqlServer.define('Stock', {
    "entryId": {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    "quantity": {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
}
);

Book.hasOne(Stock, {foreignKey: 'entryId', onDelete: "CASCADE"});
Stock.belongsTo(Book, {onDelete: "CASCADE"});

Stock.sync()
    .then(() => {
        console.log("Stock table created");
    }).catch((error) => {
    console.log("Error creating Stock table: ", error);
});

export default Stock;
