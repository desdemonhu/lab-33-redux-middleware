import React from 'react';
import ReactDom from 'react-dom';

const CategoryUpdate = ({category, action}) => {

    let updatedContent = '';

    const cancel = () => {
        action.toggleCategoryUpdate(category.id);
    }
    const trackChangeText = (event) => {
        updatedContent = event.target.value;
    }
    const sendUpdate = () => {
        action.updateCategory({updatedContent, id: category.id});
        action.toggleCategoryUpdate(category.id);
    }

    return(
        <div className="category-update">
            Update your Category Name: 
            <br />
            <input placeholder={category.name} onChange={trackChangeText}></input>
            <br />
            <button onClick={sendUpdate}>Update Category</button>
            <button onClick={cancel}>Cancel Update</button>
        </div>
    );
};

export default CategoryUpdate;