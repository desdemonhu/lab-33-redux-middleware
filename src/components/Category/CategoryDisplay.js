import React from 'react';
import ReactDom from 'react-dom';

import ExpenseDisplay from '../Expense/ExpenseDisplay';
import ExpenseCreate from '../Expense/ExpenseCreate';
import ExpenseUpdate from'../Expense/ExpenseUpdate';

class CategoryDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    expenseDisplay = () => {
        return Object.keys(this.props.category.expenses).map(expense_key => {
            let localExpense = this.props.category.expenses[expense_key];

            return (this.props.category.expenses[expense_key].updating) ?
                <ExpenseUpdate expense={localExpense} actions={this.props.actions} key={expense_key}/> : 
                <ExpenseDisplay expense={localExpense} actions={this.props.actions} key={expense_key}/>;
        });
    }

    toggle = () => {

        this.props.actions.toggleCategoryUpdate(this.props.category.id);
    }
    deleteThis = () => {

        this.props.actions.deleteCategory(this.props.category.id);
    }

    render() {
        return (
            <div className="category-display">
            <p>Category Name: {this.props.category.name}</p>
            <p>Category Budget: {this.props.category.budget}</p>

            <button onClick={this.toggle}>Update Category</button>
            <button onClick={this.deleteThis}>Delete Category</button>
            <br />
            <br />
            Expenses:
            <br />
            {this.expenseDisplay()}
            <br />
            <ExpenseCreate categoryID={this.props.category.id} createExpense={this.props.actions.addExpense}/>
        </div>
        )
    }
}

export default CategoryDisplay;