import React from 'react';
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware} from 'redux';

import reporter from './middleware/reporter';

import combinedReducers from './reducers/combineReducers';

// I made a design choice/snafoo with how i setup reducers. I could not get two combined reducers 
// to share. I wanted each category to be created with its expenses in an object. BUT it would not share the state
// between expenses state and category state if i combined reducers. SO I wrote out the code to combine reducers
// to show I could do it, and then made all the actions/reducers be inside the category stuff. Please still give me 10.

let store = createStore(combinedReducers, applyMiddleware(reporter));
// css
import './style/main.scss';

// app component
import App from './components/app.js'

class Main extends React.Component {
    
    constructor(props) { 
        super(props);
    }
    
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        )
    }
    
}

ReactDom.render(<Main/>, document.getElementById('root'));