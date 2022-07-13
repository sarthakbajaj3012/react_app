import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import './Expenses.css'

function Expenses(prop){
    return(
    <Card className="expenses">
        { prop.expenses.map((expense) => (
            <ExpenseItem 
                title = {expense.title}
                amount = {expense.amount}
                date = { expense.date } >
            </ExpenseItem>
        ))}
    </Card>);
}

export default Expenses;

