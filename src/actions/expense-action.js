export const expense_create = expense => {
    return {
        type: 'EXPENSE_CREATE',
        expense
    }
}

export const expense_update = (expense) => {
    return {
        type: 'EXPENSE_UPDATE',
        expense
    }
}

export const expense_destroy = expense => {
    return {
        type: 'EXPENSE_DESTROY',
        expense
    }
}

export const expense_toggle = expense => {
    return {
        type: 'EXPENSE_TOGGLE',
        expense
    }
}