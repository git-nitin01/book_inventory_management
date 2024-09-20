import { sqlServer } from '../scripts/db_init.js';
import { DataTypes } from 'sequelize';

const Book = sqlServer.define('Inventory', {
        "entryId": {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        "isbn": {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        "title": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "author": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "genre": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "publicationDate": {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

Book.sync()
    .then(() => {
        console.log("Book table created");
    }).catch((error) => {
    console.log("Error creating Book table: ", error);
    });

export default Book;
