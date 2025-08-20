import './Expenses.css';
import Card from '../../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesList from  './ExpensesList'

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <div className="main-container">
      <Card className="expense-list">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
