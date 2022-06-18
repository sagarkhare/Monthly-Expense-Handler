"usestrict";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Randomm from "./StatePrevValue";

function App() {
  const [expenses, setExpenses] = useState([
    { id: "e1", title: "Book", amount: 60, date: new Date(2022,1, 1) },
    { id: "e2", title: "Copy", amount: 20, date: new Date(2022, 1, 12) },
    { id: "e3", title: "Pen", amount: 6, date: new Date(2022, 5, 30) },
    { id: "e4", title: "Box", amount: 10, date: new Date(2022, 8, 15) },
    { id: "e5", title: "Phone", amount: 100, date: new Date(2021, 2, 14) },
    { id: "e6", title: "A", amount: 22, date: new Date(2021, 5, 14) },
    { id: "e7", title: "B", amount: 33, date: new Date(2021, 9, 14) },
    { id: "e8", title: "C", amount: 40, date: new Date(2021, 1, 14) },
    { id: "e9", title: "D", amount: 55, date: new Date(2020, 8, 14) },
    { id: "e10", title: "E", amount: 66, date: new Date(2020, 9, 14) },
    { id: "e11", title: "S", amount: 77, date: new Date(2020, 10, 14) },
    { id: "e12", title: "Q", amount: 88, date: new Date(2020, 11, 14) },
    { id: "e13", title: "W", amount: 99, date: new Date(2019, 1, 14) },
    { id: "e14", title: "H", amount: 100, date: new Date(2019, 2, 14) },
    { id: "e15", title: "L", amount: 12, date: new Date(2019, 3, 14) },
    { id: "e16", title: "K", amount: 43, date: new Date(2019, 4, 14) },
  ]);
  const addExpenseHandler = (data) => {
    const newExpense = {
      id: "e" + Math.random(),
      ...data,
      amount: Number(data.amount),
      date: new Date(data.date),
    };
    setExpenses((prevState) => {
      return [...prevState, newExpense];
    });
    // console.log(expenses);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
