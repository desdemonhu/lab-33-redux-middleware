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
        return Object.keys(this.props.expenses).map(expense => {

            if (this.props.expenses[expense].categoryID === this.props.category.id) return (this.props.expenses[expense].updating) 
                ?   <ExpenseUpdate expense={this.props.expenses[expense]} actions={this.props.expense_action} key={this.props.expenses[expense].id}/> : 
                    <ExpenseDisplay expense={this.props.expenses[expense]} actions={this.props.expense_action} key={this.props.expenses[expense].id}/>;
        });
    }

    toggle = () => {

        this.props.category_action.toggleCategoryUpdate(this.props.category.id);
    }
    deleteThis = () => {

        this.props.category_action.deleteCategory(this.props.category.id);
    }

    ondrop = (event) => {
        event.preventDefault();
        let data = event.dataTransfer.getData("text");
        this.props.expense_action.categoryUpdate({id: data, category: this.props.category.id});
        this.expenseDisplay();
    }

    ondragover = (event) => {     
        event.preventDefault();
        
    }

    render() {
        return (
            <div className="category-display" onDragOver={this.ondragover} onDrop={this.ondrop}>
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
            <ExpenseCreate categoryID={this.props.category.id} createExpense={this.props.expense_action.addExpense}/>
        </div>
        )
    }
}

export default CategoryDisplay;