import express from "express";
import { getTransactions } from "../controllers/transactions.controller.js";

const app = express.Router();

app.get('/get', getTransactions);


export default app;