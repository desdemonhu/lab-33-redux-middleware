import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

import * as actions from '../src/actions/category-action';


// they all return the type they are supposed to. testing done.
test('Tesing all categories', () => {
    let allCategories = [
        'category_create',
        'category_update',
        'category_delete',
        'category_toggle',
        'expense_create',
        'expense_update',
        'expense_destroy',
        'expense_toggle'
    ];

    allCategories.forEach(category => {
        if (category === 'category_delete') {
            expect(actions[category]().type).toEqual('CATEGORY_DESTROY');
        return;
        }

    expect(actions[category]({}).type).toEqual(category.toUpperCase());

    });


});