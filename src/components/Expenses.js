import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(prop){
    return(
    <div className="expenses">
        { prop.expenses.map((expense) => (
            <ExpenseItem 
                title = {expense.title}
                amount = {expense.amount}
                date = { expense.date } >
            </ExpenseItem>
        ))}
    </div>);
}

export default Expenses;

