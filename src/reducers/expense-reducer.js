import initialState from '../lib/initialState';

const errorThrower = (expense) => {
    if (expense.expense === undefined) throw new Error ('No expense text provided.');
  }

const expenseReducer = (state = initialState, action) => {
    let {type, expense} = action;
    let oldState = {...state};

    switch(action.type) {
        case 'EXPENSE_CREATE':
            errorThrower(expense);
            oldState[expense.id] = expense;
            return oldState;

        case 'EXPENSE_TOGGLE':
            oldState[expense.id].updating = !oldState[expense.id].updating;
            return oldState;

        case 'EXPENSE_DESTROY':

            delete oldState[expense.id];
            return oldState;

        case 'EXPENSE_UPDATE':
        errorThrower(expense);
            oldState[expense.id].expense = expense.updatedContent;
            return oldState;

        default:
            return state;
    }
}

export default expenseReducer;
