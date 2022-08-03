import React , { useState } from "react";


import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
function ExpenseItem(props) {
    
    const [title, setTitle] = useState(props.title);

    const ClickHandler = () => {
        setTitle('Title changed'); 
        console.log("Hii")
    }
    
    return(
    <Card className="expense-item">
        <ExpenseDate date = {props.date} />
        <div className="expense-item__description" >
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={ClickHandler}> CHANGE TITLE</button>
    </Card>); 
}

export default ExpenseItem;