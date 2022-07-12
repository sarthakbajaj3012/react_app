import ExpenseItem from "./ExpenseItem";

function Expenses(prop){
    return(
    <div>
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

