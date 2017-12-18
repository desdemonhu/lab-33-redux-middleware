import React from 'react';
import ReactDom from 'react-dom';

const CategoryUpdate = ({updateCategory, category, toggleCategory}) => {
    let updatedContent = '';

    const cancel = () => {
        toggleCategory(category.id);
    }
    const trackChangeText = (event) => {
        updatedContent = event.target.value;
    }
    const sendUpdate = () => {
        updateCategory({text: updatedContent, id: category.id});
        toggleCategory(category.id);
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