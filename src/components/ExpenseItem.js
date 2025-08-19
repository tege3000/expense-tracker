import './ExpenseItem.css';

function ExpenseItem(props) {
    const date = new Date(props.date);
    const month = date.toLocaleString('en-US', { month: 'long' });  
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();    
    const price = props.price.toFixed(2);       

    return (
        <div className='container'>
            <div className='tracker-left'>
                <h4 className='date-month'>{month}</h4>
                <h6 className='date-year'>{year}</h6>
                <h2 className='date-day'>{day}</h2>
            </div>
            <div className='tracker-center'>
                <h2>{props.item}</h2>
            </div>
            <div className='tracker-right'>
                <h2 className='price'>${price}</h2>
            </div>
        </div>
    );
}

export default ExpenseItem;