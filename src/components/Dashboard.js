import React from 'react';
import ReactDom from 'react-dom';

import {connect} from 'react-redux';

import {category_create, category_update, category_delete, category_toggle, expense_create, expense_update, expense_destroy, expense_toggle} from '../actions/category-action';

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
                <CategoryUpdate category={localCategory} toggleCategory={this.props.category.toggleCategoryUpdate} updateCategory={this.props.category.updateCategory} key={category_key}/> :
                <CategoryDisplay actions={this.props.category} category={localCategory} key={category_key}/>
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
        toggleCategoryUpdate: category => dispatch(category_toggle(category)),
        addExpense: expense => dispatch(expense_create(expense)),
        updateExpense: expense => dispatch(expense_update(expense)),
        deleteExpense: expense => dispatch(expense_destroy(expense)),
        toggleExpenseUpdate: expense => dispatch(expense_toggle(expense))
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);