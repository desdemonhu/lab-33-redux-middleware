import React from 'react';
import ReactDom from 'react-dom'

import { Link, Route } from 'react-router-dom';
import Dashboard from './Dashboard.js';

class App extends React.Component {
    
    constructor(props) { 
        super(props);
    }
    
    render() {
        return (
            <div id="base-div">
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <Route path="/" component={Dashboard}/>
                
            </div>
        )
    }
    
}

module.exports = App;