import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
  {id: 'e1', date: new Date(2020,8,14), title: 'Toilet Paper', amount: 94.12},
  {id: 'e2', date: new Date(2021,7,11), title: 'New TV', amount: 799.49},
  {id: 'e3', date: new Date(2019,6,13), title: 'Car Insurance', amount: 294.67},
  {id: 'e4', date: new Date(2018,5,12), title: 'New Desk (Wooden)', amount: 450.1},
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div> 
  );
}

export default App;
