import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import '@babel/polyfill';
import './style.css';

ReactDom.render(<App />, document.getElementById('app'));
