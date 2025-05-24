const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    title:String,
    amount:Number,
    transType:String,
    date:{type:Date,default:Date.now()}
}) 

module.exports = mongoose.model('expense',ExpenseSchema);