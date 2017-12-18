import { combineReducers } from 'redux'

import categoryReducer from './category-reducer.js';
import expenseReducer from './expense-reducer.js';

const category = combineReducers({
  categories: categoryReducer,
  expenses: expenseReducer
})

export default category;