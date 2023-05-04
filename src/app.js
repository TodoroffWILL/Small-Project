import { onExpense } from './expense.js';
import { onIncome } from './income.js';

document.getElementById('income').addEventListener('click', onIncome);
document.getElementById('expense').addEventListener('click',onExpense)

