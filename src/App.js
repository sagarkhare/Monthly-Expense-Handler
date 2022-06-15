import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { id: "e1", title: "Book", amount: 60, date: new Date(2022, 6, 14) },
    { id: "e2", title: "Copy", amount: 20, date: new Date(2022, 6, 14) },
    { id: "e3", title: "Pen", amount: 6, date: new Date(2022, 6, 14) },
    { id: "e4", title: "Box", amount: 10, date: new Date(2022, 6, 14) },
  ];
  const addExpenseHandler = (data) =>{
    const newExpense = {
      id: "e"+Math.random(),
      ...data,
      amount: Number(data.amount),
      date: new Date(data.date),
    }
    expenses.push(newExpense);
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
