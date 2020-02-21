
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Hello =() =>{
    return <p>Hello</p>
}
const biodata =() =>{
    return <p>Hello</p>
}

ReactDOM.render (<App />, document.getElementById('root'));
//ReactDOM.render (<p>hello word</p>, document.getElementById('root'));

serviceWorker.unregister();