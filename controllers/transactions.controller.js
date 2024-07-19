import { Transactions } from "../models/transactions.js";

const getTransactions = async(req, res, next) =>{
    try {
        const movies = await Transactions.find();

        res.json(movies);

    } catch (error) {
        console.log(err);
    }
}

export {getTransactions}