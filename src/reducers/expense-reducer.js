import initialState from '../lib/initialState';

// this is a template expense reducer. I know how to do it, I've just gone a different direction with my design and this won't work. 

const expenseReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'EXPENSE_CREATE':

            return {...state, test: true};

        case 'EXPENSE_UPDATE':
            return state;
        
        case 'EXPENSE_DESTROY':
            return state;
        
        default:
            return state;
    }
}

export default expenseReducer;