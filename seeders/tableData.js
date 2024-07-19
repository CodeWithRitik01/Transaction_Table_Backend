import axios from "axios"
import { Transactions } from "../models/transactions.js";


const seedData = async() =>{
    try{
       const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json')
       const transactions = response.data;
      
       await Transactions.deleteMany({});
       await Transactions.insertMany(transactions);

       console.log("Data has been seeded")
      }catch(error){
       console.log(error)
    }
}

export {seedData};