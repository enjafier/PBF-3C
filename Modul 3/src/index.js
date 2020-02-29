
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './component/HelloComponent';
import StatefullComponent from './container/StateFullComponent';
import StateFullComponent from './container/StateFullComponent';
import Login from './login/login';

//function HelloWord(){
//        return <p> ini adalah function component</p>
//}
//const HelloWord = () =>{
//    return <p> ini adalah arrow</p>
//}
//class StatefullComponents extends React.Component{
//
 //   render(){
 //      return <p> ini adalah statefull</p>
//    }
//}
//class StatefullComponent extends React.Component {
//    render() {
//      return <h1>ini adalah statefull component</h1>;
//    }
//  }
ReactDOM.render (<Login />, document.getElementById('root'));
//ReactDOM.render (<p>hello word</p>, document.getElementById('root'));

serviceWorker.unregister();