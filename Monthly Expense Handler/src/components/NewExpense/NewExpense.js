import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){
    const onSaveExpenseDataHandler = (data) =>{
        // const newExpenseData = {
        //     id: 'e'+ Math.random(),
        //     ...data,
        //     amount: Number(data.amount),
        // };
        props.onAddExpense(data);
    };

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;