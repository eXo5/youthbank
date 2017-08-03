import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
// import ViewParent from './components/ParentView/ViewParent';
// import ViewChild from './components/ChildView/ViewChild';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// ReactDOM.render(<BrowserRouter><ViewParent /></BrowserRouter>, document.getElementById('root'));


//registerServiceWorker();
