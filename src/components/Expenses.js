import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = () => {

  const expenses = [
      {date: '2020-08-14', item: 'Toilet Paper', price: 94.12},
      {date: '2021-06-11', item: 'New TV', price: 799.49},
      {date: '2010-03-18', item: 'Car Insurance', price: 294.67},
      {date: '2022-02-13', item: 'New Desk (Wooden)', price: 450.1},
  ];

  return (
    <div className="main-container">
      <h1>Expense Tracker</h1>
      <Card className="expense-list">
        <ExpenseItem date = {expenses[0].date} item = {expenses[0].item} price = {expenses[0].price}></ExpenseItem>
        <ExpenseItem date = {expenses[1].date} item = {expenses[1].item} price = {expenses[1].price}></ExpenseItem>
        <ExpenseItem date = {expenses[2].date} item = {expenses[2].item} price = {expenses[2].price}></ExpenseItem>
        <ExpenseItem date = {expenses[3].date} item = {expenses[3].item} price = {expenses[3].price}></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
