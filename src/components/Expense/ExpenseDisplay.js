import React from 'react';
import ReactDom from 'react-dom';

class ExpenseDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    toggle = () => {
        this.props.actions.toggleExpenseUpdate(this.props.expense);
    }

    deleteThis = () => {
        this.props.actions.deleteExpense(this.props.expense);
    }

    onDragStart = (event) => {
        event.dataTransfer.setData('text/plain', this.props.expense.id);      
    }

    render() {
        return (
            <div className="expense-display" draggable onDragStart={this.onDragStart}>
                Expense: {this.props.expense.expense}
                <br />
                Cost: {this.props.expense.cost}
                <br />
                <button onClick={this.toggle}>Update Expense</button>
                <button onClick={this.deleteThis}>Delete Expense</button>
                <br />
            </div>
        )
    }
}

export default ExpenseDisplay;