import { response } from "express";
import BookService from "../services/book.service";

class BookController {
  private static bookService: BookService;
  private static instance: BookController;
  
  private constructor() {
    BookController.bookService = BookService.getInstance();
  }

  public static getInstance(): BookController {
    if (!BookController.instance) {
      BookController.instance = new BookController();
    }
    return BookController.instance;
  }

  public async addBook(req: any, res: any) {
    const book = req.body;
    console.log(book);
    BookController.bookService.addBook(book).then((response) => {
      res.status(200).send(response);
    }).catch((error) => {
      res.status(500).send("Unable to add book "+error);
    })
  }

  public async getAllBooks(req: any, res: any) {
    BookController.bookService.getAllBooks().then((response) => {
      res.status(200).send(response);
    }).catch((error) => {
      res.status(500).send(error);
    })
  }

  public async updateBook(req: any, res: any) {
    const book = req.body;
    console.log(book);
    BookController.bookService.updateBook(book).then((response) => {
      res.status(200).send(response);
    }).catch((error) => {
      res.status(500).send(`Unable to update book ${error}`);
    })
  }

  public async deleteBook(req: any, res: any) {
    const id = req.params.id;
    BookController.bookService.deleteBook(id).then((response) => {
      res.status(200).send(response);
    }).catch((error) => {
      res.status(500).send(error);
    })
  }

}

export default BookController;