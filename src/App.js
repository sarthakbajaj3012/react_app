import Expenses from "./components/Expenses/Expenses";
import { Calulcate_tranport } from "./components/Expenses/test";
import NewExpense from "./components/NewExpense/NewExpense";


function App() {
  let expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("app.js");
    expenses.push(expense)
    Calulcate_tranport();
  };

  return (
    <div>
      <h1>Insurance</h1>
      <Expenses expenses = {expenses}></Expenses>
      <NewExpense addExpense = { addExpenseHandler}></NewExpense>
    </div>
  );
}

export default App;
