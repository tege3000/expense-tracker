import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../../UI/Card'

const ExpenseItem = (props) => {
    return (
        <li>
            <Card className='container'>
                <ExpenseDate date = {props.date} ></ExpenseDate>
                
                <div className='tracker-center'>
                    <h2>{props.title}</h2>
                </div>
                <div className='tracker-right'>
                    <h2 className='price'>${props.amount}</h2>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;