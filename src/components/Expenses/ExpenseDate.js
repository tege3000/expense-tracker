import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const day = props.date.getDate();      
    const month = props.date.toLocaleString("en-US", { month: "long" });;
    const year = props.date.getFullYear();  

    return (
        <div className='tracker-left'>
            <h4 className='date-month'>{month}</h4>
            <h6 className='date-year'>{year}</h6>
            <h2 className='date-day'>{day}</h2>
        </div>
    )
}

export default ExpenseDate;

