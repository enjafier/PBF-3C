
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './component/HelloComponent';
import StatefullComponent from './container/StateFullComponent';
import StateFullComponent from './container/StateFullComponent';
import Login from './login/login';
import BlogPost from './container/BlosPost/BlogPost';
import MahasiswaPost from './container/MahasiswaPost/MahasiswaPost'

ReactDOM.render (<MahasiswaPost />, document.getElementById('content'));
//ReactDOM.render (<p>hello word</p>, document.getElementById('root'));

serviceWorker.unregister();