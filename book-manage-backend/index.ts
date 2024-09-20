import express, { application, request, response } from "express";
import dotenv from "dotenv";
import { connectSQLServer } from "./scripts/db_init";
import router from "./routes/book.routes";
import cors from 'cors';

dotenv.config();
const app: application = express();

app.use(cors());
app.use(express.json());
app.use("/book", router);

app.use((req: request, res: response) => {
    res.status(404).send("Resource not found");
});

const PORT = process.env.PORT || 3000;

connectSQLServer().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.log("Error connecting to database: ", error);
});
