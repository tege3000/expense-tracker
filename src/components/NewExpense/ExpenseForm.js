import './ExpenseForm.css';
import {useState} from 'react';

const NewExpense = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(''); 
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

    }   
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount, // Convert to number
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        // Clear the input fields after submission
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit = {submitHandler} className="new-expense">
            <div className="new-expense__control form-top">
                <div>
                    <div><label>Title</label></div>
                    <div><input type="text" value = {enteredTitle} onChange = {titleChangeHandler}/></div>
                </div>
                <div>
                    <div><label>Amount</label></div>
                    <div><input type="number" min="0.01" step="0.01" value = {enteredAmount} onChange = {amountChangeHandler}/></div>
                </div>
            </div>
            <div className="new-expense__control form-bottom">
               <div>
                    <div><label>Date</label></div>
                    <div><input type="date" min="2019-01-01" max="2022-12-31" value = {enteredDate} onChange = {dateChangeHandler}/></div>
               </div>
            </div> 
            <div className="new-expense__actions">
                <button id="add-expense" type="submit">Add Expense</button>
            </div>                   
        </form>
    )
}

export default NewExpense