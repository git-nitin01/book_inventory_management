import express, { request, response } from "express";
import BookController from "../controllers/book.controller";

const router = express.Router();
const bookController = BookController.getInstance();

// add a book
router.post("/add", async (req: request, res: response) => await bookController.addBook(req, res));
// get all books
router.get("/all", async (req: request, res: response) => await bookController.getAllBooks(req, res));
// update a book
router.put("/update", async (req: request, res: response) => await bookController.updateBook(req, res));
// delete a book
router.delete("/delete/:id", async (req: request, res: response) => await bookController.deleteBook(req, res));

export default router;
