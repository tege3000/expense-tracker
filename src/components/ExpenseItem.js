import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
    const date = new Date(props.date);    

    return (
        <div className='container'>
            <ExpenseDate date = {date} ></ExpenseDate>
            
            <div className='tracker-center'>
                <h2>{props.item}</h2>
            </div>
            <div className='tracker-right'>
                <h2 className='price'>${props.price.toFixed(2)}</h2>
            </div>
        </div>
    );
}

export default ExpenseItem;