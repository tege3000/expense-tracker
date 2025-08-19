import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className='container'>
            <div className='tracker-left'>
                <h4 className='date-month'>August</h4>
                <h6 className='date-year'>2020</h6>
                <h2 className='date-day'>14</h2>
            </div>
            <div className='tracker-center'>
                <h2>Toilet Paper</h2>
            </div>
            <div className='tracker-right'>
                <h2 className='price'>$94.12</h2>
            </div>
        </div>
    );
}

export default ExpenseItem;