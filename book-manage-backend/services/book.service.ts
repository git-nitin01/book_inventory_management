import Book from "../models/book.model";
import { bookType } from "../dto/types";
import StockService from "./stock.service";

class BookService {
    private static instance: BookService;
    private stockService: StockService;

    private constructor() {
        this.stockService = StockService.getInstance();
    }

    public static mapBook(book: any): bookType {
        return {
            entryId: book.entryId,
            isbn: book.isbn,
            title: book.title,
            author: book.author,
            genre: book.genre,
            publicationDate: book.publicationDate
        }
    }

    public static getInstance(): BookService {
        if (!BookService.instance) {
            BookService.instance = new BookService();
        }
        return BookService.instance;
    }

    public async getBookByISBN(isbn: string) : Promise<bookType> {
        try {
            const book = await Book.findOne({ where: { isbn: isbn } });
            return BookService.mapBook(book?.dataValues);
        } catch (error) {
            throw error;
        }
    }

    public async addBook(book: bookType) : Promise<string> {
        try {
            await Book.create(book);
            book.stock && (await this.stockService.addEntry(book.entryId, book.stock));
            return "Book added successfully";
        } catch (error) {
            throw error;
        }
    }

    public async getAllBooks() : Promise<bookType[]> {
        try {
            const books = await Book.findAll();
            const stocks = await this.stockService.getAllEntries();
            const booksWithStock = books.map((book: any) => {
                const stock = stocks.find((stock: any) => stock.entryId === book.entryId);
                return {
                    ...book.dataValues,
                    stock: stock?.quantity 
                };
            });
            return booksWithStock;
        } catch (error) {
            throw error;
        }
    }

    public async updateBook(book: any) : Promise<string> {
        try {
            await Book.update(book, {
                where: {
                    entryId: book.entryId
                }
            });
            book.stock && (await this.stockService.updateEntry(book.entryId, book.stock));
            return `Entry ID ${book.entryId} updated successfully`;
        } catch (error) {
            throw error;
        }
    }

    public async deleteBook(id: number) {
        try {
            await Book.destroy({
                where: {
                    entryId: id
                }
            });
            return `Entry ID ${id} deleted successfully`;
        } catch (error) {
            throw error;
        }
    }
}

export default BookService;
