import uuid from 'uuid/v4';

module.exports = ({expense, categoryID, cost}) => {
    return {
        id: uuid(),
        expense: expense,
        cost: cost,
        categoryID:  categoryID,
        timestamp: new Date(),
        updating: false
    }
}