import Stock from "../models/stock.model";
import { stockType } from "../dto/types";

class StockService {
    private static instance: StockService;

    private constructor() {}

    public static mapStock(stock: any): stockType {
        return {
            entryId: stock.entryId,
            quantity: stock.quantity
        }
    }

    public static getInstance(): StockService {
        if (!StockService.instance) {
            StockService.instance = new StockService();
        }
        return StockService.instance;
    }

    public async addEntry(entryId: number, quantity: number) : Promise<string> {
        try {
            console.log(entryId, quantity);
            await Stock.create({
                "entryId": entryId,
                "quantity": quantity
            });
            return "Entry added successfully";
        } catch (error) {
            throw error;
        }
    }

    public async getAllEntries() : Promise<stockType[]> {
        try {
            const entries = await Stock.findAll();
            const mappedEntries = entries.map((entry: any) => StockService.mapStock(entry));
            return mappedEntries;
        } catch (error) {
            throw error;
        }
    }

    public async updateEntry(entryId: number, quantity: number) : Promise<string> {
        try {
            await Stock.update({
                quantity: quantity
            }, {
                where: {
                    entryId: entryId
                }
            });
            return "stock entry updated successfully";
        } catch (error) {
            throw error;
        }
    }
}

export default StockService;