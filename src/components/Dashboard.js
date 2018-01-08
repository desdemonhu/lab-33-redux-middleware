import React from 'react';
import ReactDom from 'react-dom';

import {connect} from 'react-redux';

import {category_create, category_update, category_delete, category_toggle} from '../actions/category-action';

import {expense_create, expense_update, expense_destroy, expense_toggle, expense_category_update} from '../actions/expense-action';

import CategoryCreate from './Category/CategoryCreate.js';
import CategoryDisplay from './Category/CategoryDisplay.js';
import CategoryUpdate from './Category/CategoryUpdate.js';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    categoryDisplay = () => {
        return Object.keys(this.props.state.categories).map(category_key => {
            let localCategory = this.props.state.categories[category_key];
            return (localCategory.updating) ?
                <CategoryUpdate category={localCategory} action={this.props.category} key={category_key}/> :
                <CategoryDisplay expenses={this.props.state.expenses} expense_action={this.props.expense} category_action={this.props.category} category={localCategory} key={category_key}/>
        });

    }


    render() {
        return (
            <div>
                <CategoryCreate addCategory={this.props.category.addCategory}/>
                <br />
                Your Categories: 
                <br />
                {this.categoryDisplay()}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        state
    }
};

const mapDispatchToProps = (dispatch, getState) => ({
    category: {
        addCategory: category => dispatch(category_create(category)),
        updateCategory: category => dispatch(category_update(category)),
        deleteCategory: category => dispatch(category_delete(category)),
        toggleCategoryUpdate: category => dispatch(category_toggle(category))
    },
    expense: {
        addExpense: expense => dispatch(expense_create(expense)),
        updateExpense: expense => dispatch(expense_update(expense)),
        deleteExpense: expense => dispatch(expense_destroy(expense)),
        toggleExpenseUpdate: expense => dispatch(expense_toggle(expense)),
        categoryUpdate: expense => dispatch(expense_category_update(expense))
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);