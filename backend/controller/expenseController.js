const Expense = require('../models/expense.model');
exports.getExpenses = async (req,res)=>{
    const expense = await Expense.find({user:req.user.id});
    res.json(expense);
}
exports.addExpense = async (req,res)=>{
    const expense = await Expense.create({
        ...req.body,user:req.user.id
    })
    res.json(expense)
}
exports.deleteExpense = async(req,res)=>{
    await Expense.findOneAndDelete({_id:req.params.id,user:req.user.id})
    res.json({message:"deleted"})
}