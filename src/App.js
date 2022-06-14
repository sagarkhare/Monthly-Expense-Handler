import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    { id: "e1", title: "Book", amount: 60, date: new Date(2022, 6, 14) },
    { id: "e2", title: "Copy", amount: 60, date: new Date(2022, 6, 14) },
    { id: "e3", title: "Pen", amount: 60, date: new Date(2022, 6, 14) },
    { id: "e4", title: "Box", amount: 60, date: new Date(2022, 6, 14) },
  ];
  return (
    <div>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
