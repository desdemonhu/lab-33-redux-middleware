
export const category_create = category => {
    return {
        type: 'CATEGORY_CREATE',
        category
    }
}

export const category_update = (content) => {
    return {
        type: 'CATEGORY_UPDATE',
        content
    }
}

export const category_delete = id => {
    return {
        type: 'CATEGORY_DESTROY',
        id
    }
}

export const category_toggle = id => {
    return {
        type: 'CATEGORY_TOGGLE',
        id
    }
}


export const expense_create = expense => {
    return {
        type: 'EXPENSE_CREATE',
        expense
    }
}

export const expense_update = (update) => {
    return {
        type: 'EXPENSE_UPDATE',
        update:update.updatedContent,
        expense: update.expense
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