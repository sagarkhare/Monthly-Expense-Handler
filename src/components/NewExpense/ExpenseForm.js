import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // const [title,setTitle] = useState();
  // const [amount,setAmount] = useState();
  // const [date,setDate] = useState();
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    // setTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     title: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     amount: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    // setDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     date: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(userInput);
    setUserInput({
        title:"",
        amount:"",
        date:"",
    });
  };
  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0"
            placeholder="Enter Amount"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2000-01-01"
            max="2025-12-31"
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;