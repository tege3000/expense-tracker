import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="main-container">
      <h1>Expense Tracker</h1>
      <div className="expense-list">
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
