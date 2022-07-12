import ExpenseItem from "./ExpenseItem";

function Expenses(prop){
    return(
    <div>
        <ExpenseItem 
            title = {prop.expenses[0].title}
            amount = {prop.expenses[0].amount}
            date = { prop.expenses[0].date } >
        </ExpenseItem>
        <ExpenseItem 
            title = {prop.expenses[1].title}
            amount = {prop.expenses[1].amount}
            date = { prop.expenses[1].date } >
        </ExpenseItem>
        <ExpenseItem 
            title = {prop.expenses[2].title}
            amount = {prop.expenses[2].amount}
            date = { prop.expenses[2].date } >
        </ExpenseItem>
    </div>);
}

export default Expenses;

