import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import expect from 'expect';


import categoryReducer from '../src/reducers/category-reducer';
import newCategory from '../src/lib/newCategory';
import newExpense from '../src/lib/newExpense';
import { setState } from 'expect/build/jest_matchers_object';


Enzyme.configure({ adapter: new Adapter() });


test('Test that CATEGORY_CREATE returns state with a new Category inside', () => {
    let brandNewCategory = newCategory("Our Testing Category", 10);
    

    let action = {type: 'CATEGORY_CREATE', category: brandNewCategory};

    let state = categoryReducer(state,action);

    expect(Object.keys(state).length).toEqual(1);
});

test('Test that CATEGORY_UPDATE updates the category name within state if the id matches', () => {
    let brandNewCategory1 = newCategory("Our Testing Category 1", 10);
    let brandNewCategory2 = newCategory("Our Testing Category 2", 10);
    

    let action = {type: 'CATEGORY_CREATE', category: brandNewCategory1};

    let state = categoryReducer(state,action);

    action = {type: 'CATEGORY_CREATE', category: brandNewCategory2};
    state = categoryReducer(state, action);
    action = {
        type: 'CATEGORY_UPDATE',
        content: {
            id: brandNewCategory1.id,
            text: 'New Category 1 Text'
        }
    }
    state = categoryReducer(state, action);

    expect(state[brandNewCategory1.id].name).toEqual('New Category 1 Text');
});

test('Test that CATEGORY_DESTROY removes a category from the state array', () => {
    let brandNewCategory1 = newCategory("Our Testing Category 1", 10);
    let brandNewCategory2 = newCategory("Our Testing Category 2", 10);
    

    let action = {type: 'CATEGORY_CREATE', category: brandNewCategory1};

    let state = categoryReducer(state,action);

    action = {type: 'CATEGORY_CREATE', category: brandNewCategory2};
    state = categoryReducer(state, action);

    action = {
        type: 'CATEGORY_DESTROY',
        id: brandNewCategory1.id
    }

    state = categoryReducer(state, action);
    expect(Object.keys(state).length).toEqual(1);

});

test('Test that toggling the updating status works. I am going to call this good for both toggle versions', () => {
    let brandNewCategory1 = newCategory("Our Testing Category 1", 10);

    let action = {type: 'CATEGORY_CREATE', category: brandNewCategory1};

    let state = categoryReducer(state,action);

    expect(brandNewCategory1.updating).toEqual(false);

    action = {
        type: 'CATEGORY_TOGGLE',
        id: brandNewCategory1.id
    };

    state = categoryReducer(state, action);

    expect(brandNewCategory1.updating).toEqual(true);
});

test('Adding an expense to a category', () => {
    let brandNewCategory1 = newCategory("Our Testing Category 1", 10);
    let action = {type: 'CATEGORY_CREATE', category: brandNewCategory1};
    let state = categoryReducer(state,action);

    let brandNewExpense1 = newExpense({expense: 'Expense Name 1', categoryID: brandNewCategory1.id, cost:100});

    action = {
        type: 'EXPENSE_CREATE',
        expense: brandNewExpense1
    };

    state = categoryReducer(state,action);
    expect(Object.keys(state[brandNewCategory1.id].expenses).length).toEqual(1);
});

test('Test updating the expense that is in the category', () => {
    let brandNewCategory1 = newCategory("Our Testing Category 1", 10);
    let action = {type: 'CATEGORY_CREATE', category: brandNewCategory1};
    let state = categoryReducer(state,action);

    let brandNewExpense1 = newExpense({expense: 'Expense Name 1', categoryID: brandNewCategory1.id, cost:100});

    action = {
        type: 'EXPENSE_CREATE',
        expense: brandNewExpense1
    };

    state = categoryReducer(state,action);

    action = {
        type: 'EXPENSE_UPDATE',
        expense: brandNewExpense1,
        update: "New Text!"
    }

    state = categoryReducer(state, action);



    expect(state[brandNewCategory1.id].expenses[Object.keys(state[brandNewCategory1.id].expenses)[0]].expense).toEqual("New Text!");
});

test('Deleteing an expense from a category', () => {
    let brandNewCategory1 = newCategory("Our Testing Category 1", 10);
    let action = {type: 'CATEGORY_CREATE', category: brandNewCategory1};
    let state = categoryReducer(state,action);

    let brandNewExpense1 = newExpense({expense: 'Expense Name 1', categoryID: brandNewCategory1.id, cost:100});
    let brandNewExpense2 = newExpense({expense: 'Expense Name 2', categoryID: brandNewCategory1.id, cost:100});

    action = {
        type: 'EXPENSE_CREATE',
        expense: brandNewExpense1
    };

    state = categoryReducer(state,action);

    action = {
        type: 'EXPENSE_CREATE',
        expense: brandNewExpense2
    };

    state = categoryReducer(state,action);    

    expect(Object.keys(state[brandNewCategory1.id].expenses).length).toEqual(2);

    action = {
        type: 'EXPENSE_DESTROY',
        expense: brandNewExpense2
    }

    state = categoryReducer(state,action); 

    expect(Object.keys(state[brandNewCategory1.id].expenses).length).toEqual(1);

});