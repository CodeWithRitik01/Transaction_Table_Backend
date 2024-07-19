import mongoose, { Schema, model } from "mongoose";

const schema = new Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    price:{
        type: Number,
    },
    dateofsale: {
        type: Date,
    },
    category:{
        type: String
    },
    image: {
        type:String
    },
    sold:{
        type: Boolean,
    },

 
})

export const Transactions = mongoose.models.Transactions || model("Transactions", schema);