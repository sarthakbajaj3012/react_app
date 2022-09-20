import "./Form.css"
import React , {useState} from 'react';

const Form = (props) => {
    const [enteredTitle,setTitle] = useState('');
    const [enteredAmount,setAmount] = useState('');
    const [enteredDate,setDate] = useState('');
    

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };    
    const amountChangeHandler =(event) => {
        setAmount(event.target.value);
    };
    const dateChangeHandler =(event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        }
        props.onSave(expenseData);
        setTitle("")
        setAmount("")
        setDate("")
    }
    return (
       <form onSubmit={submitHandler}> 
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label> Amount</label>
                    <input type="number" step = "0.01" min ="0.01" value={enteredAmount} onChange={ amountChangeHandler }/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max= "2022-12-31" value={enteredDate} onChange={ dateChangeHandler }/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add expense</button>
            </div>
        </form> 
    );

}

export default Form;