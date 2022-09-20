
import Form from "./Form"
import './NewExpense.css';
const NewExpense =(props) => {
    const saveHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.addExpense(expenseData);
    }
    
    return(
        <div className="new-expense">
            <Form onSave = {saveHandler} ></Form>
        </div>

    );
};

export default NewExpense; 