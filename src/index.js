import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
//import List from './List';
//import HelloComponent from './HelloComponent';
//import Login from './LoginComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

//minggu 4
//import BlogPost from './container/BlogPost/BlogPost';
//tugas
import Mahasiswa from './tugasMinggu4/Mahasiswa';

//minggu 4
//ReactDOM.render(<BlogPost />, document.getElementById('root'));
ReactDOM.render(<Mahasiswa />, document.getElementById('root'));


/*function HelloComponent() {
  return HelloComponent
}
ReactDOM.render(<HelloComponent />, document.getElementById('root'));*/

/*const HelloComponent = ()=> {
  return HelloComponent
}

class StateFullComponent extends React.Component
{
  render(){
    return <p>StateFullComponent</p>;
  }
}
ReactDOM.render(<StateFullComponent />, document.getElementById('root'));*/

//ReactDOM.render(<List />, document.getElementById('root'));
//ReactDOM.render(<HelloComponent />, document.getElementById('root'));
//ReactDOM.render(<Login />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

serviceWorker.unregister();