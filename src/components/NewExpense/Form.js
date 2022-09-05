import "./Form.css"
import React , {useState} from 'react';

const Form = () => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setAmount] = useState('');
    const [entereddate,setDate] = useState('');
    // const [userInput,setUserInput] = useState({
    //     EnteredTitle: '',
    //     EnteredAmount: '',
    //     EnteredDate:''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState)=> {
        //     return {
        //         ...prevState,
        //         EnteredTitle: event.target.value
        //     };
        // });
    };

    const amountChangeHandler =(event) => {
        setAmount(event.target.value);
        // setUserInput((prevState)=> {
        //     return {
        //         ...prevState,
        //         EnteredAmount: event.target.value
        //     };
        // });
    };
    const dateChangeHandler =(event) => {
        setDate(event.target.value);
        // setUserInput((prevState)=> {
        //     return {
        //         ...prevState,
        //         EnteredDate: event.target.value
        //     };
        // });
    };
    return (
       <form> 
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label> Amount</label>
                    <input type="number" step = "0.01" min ="0.01" onChange={ amountChangeHandler }/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max= "2022-12-31" onChange={ dateChangeHandler }/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add expense</button>
            </div>
        </form> 
    );

}

export default Form;