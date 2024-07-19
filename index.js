import "./env.js"

import express from "express";
import {createServer} from "http"
import cors from "cors";
import { corsOptions } from "./constants/config.js";
import { connectDB } from "./utils/dbConfig.js";
import multer from 'multer'
import { seedData } from "./seeders/tableData.js";

import transactionRoutes from "./routes/transactions.routes.js"


const PORT = process.env.PORT || 4000;
const mongoUrl = process.env.MONGODB_URL;


connectDB(mongoUrl);
const app = express();
const server = createServer(app);



const upload = multer()
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.use(cors(corsOptions));

// ROUTE TO CREATE SEED DATA
// app.get("/seeds", seedData)
app.use("/api/v1/transaction", upload.none(), transactionRoutes)


app.get("/", (req, res) => {
    res.send("Home")
})


server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
