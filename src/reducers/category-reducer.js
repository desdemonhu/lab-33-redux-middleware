import initialState from '../lib/initialState';

const errorThrower = (category) => {
  if (category.name === undefined) throw new Error ('No Category name provided');
}
  
  const categoryReducer = (state = initialState, action) => {
   
    switch(action.type) {
        case 'CATEGORY_CREATE':
        errorThrower(action.category);
          let newState = {...state};

          newState[action.category.id] = action.category;
          return newState;

        case 'CATEGORY_UPDATE':
     
          let updateState = {...state};
    
          updateState[action.content.id].name = action.content.text;
          return updateState;

        
        case 'CATEGORY_DESTROY':
          let thisState = {...state};

          delete thisState[action.id];
 
          return thisState;

        case 'CATEGORY_TOGGLE':
          let toggleState = {...state};
          toggleState[action.id].updating = !toggleState[action.id].updating;
          return toggleState;

        case 'EXPENSE_CREATE':
          let addExpense = {...state};

          addExpense[action.expense.categoryID].expenses[action.expense.id] = action.expense;
          return addExpense;

        case 'EXPENSE_TOGGLE':
          let toggleExpense = {...state};

          toggleExpense[action.expense.categoryID].expenses[action.expense.id].updating = !toggleExpense[action.expense.categoryID].expenses[action.expense.id].updating;

         return toggleExpense;

         case 'EXPENSE_DESTROY':

            let expenseDestroy = {...state};
            delete expenseDestroy[action.expense.categoryID].expenses[action.expense.id];

            return expenseDestroy;

        case 'EXPENSE_UPDATE':
            
            let expenseUpdate = {...state};
           expenseUpdate[action.expense.categoryID].expenses[action.expense.id].expense = action.update;

        return expenseUpdate;

        default:
            return state;
    }
  }

  export default categoryReducer;