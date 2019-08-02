import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainComponent from './component/MainComponent';
import ListComponent from './component/ListComponent';
import ReciepeComponent from './component/RecipeComponent';

ReactDOM.render(
    <Router>
        <Route
            path="/"
            component={App}
        />
        <Route
            path="/main"
            component={MainComponent}
        />
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

