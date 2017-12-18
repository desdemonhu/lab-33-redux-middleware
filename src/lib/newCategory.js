import uuid from 'uuid/v4';

module.exports = (category_name, category_budget) => {

    return {
        id: uuid(),
        name: category_name,
        budget: category_budget,
        timestamp: new Date(),
        expenses: {},
        updating: false
    }
}