import React from 'react';
import ReactDom from 'react-dom';

// newCategory(name, budget)
import newCategory from '../../lib/newCategory';

class CategoryCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    captureInput = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }
    createCategory = (event) => {
        event.preventDefault();
        this.props.addCategory(newCategory(this.state.name, this.state.budget));
    } 


    render() {
        return (
            <div className="category-create">
                Category Creation
                <form>
                    <input onChange={this.captureInput} id="name" placeholder="Name your category."></input>
                    <input onChange={this.captureInput} id="budget" placeholder="Enter your budget."></input>
                    <br />
                    <button onClick={this.createCategory}>Create Category</button>
                </form>
            </div>
        )
    }
}

export default CategoryCreate;