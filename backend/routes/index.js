const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const authController = require('../controller/AuthController');
const expenseController = require("../controller/expenseController");

router.post("/register",authController.register);
router.post("/login",authController.login);
router.get('/expenses',auth,expenseController.getExpenses);
router.post('/expenses',auth,expenseController.addExpense);
router.delete('/expenses/:id',auth,expenseController.deleteExpense);

module.exports = router;
