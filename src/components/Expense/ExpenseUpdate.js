import React from 'react';
import ReactDom from 'react-dom';


const ExpenseUpdate = ({expense, actions}) => {
 
    let updatedContent = '';

    const trackChangeText = (event) => {
        updatedContent = event.target.value;
    }

    const cancel = () => {
        // toggle
        actions.toggleExpenseUpdate(expense);
  
    }

    const sendUpdate = () => {
        actions.updateExpense({updatedContent, expense});
        cancel();
    }

    return(
        <div className="expense-update">
            Update Your Expense:
            <br />
            <input placeholder={expense.expense} onChange={trackChangeText}></input>
            <br />
            <button onClick={sendUpdate}>Update Expense</button>
            <button onClick={cancel}>Cancel Update</button>
        </div>
    );
}

export default ExpenseUpdate;