import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/**
 * @param {ReactComponent}
 *
 * ReactDOM.render(..) takes multiple arguments. Each should be react or web component.
 * React.StrictMode shows essential problems in react application in development mode only. It does not impact anythin in the proudction.
 * App is requirements of the project loaded from App.js.
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
