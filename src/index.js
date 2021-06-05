import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductForm from './ProductForm';

ReactDOM.render(
    <ProductForm handleSubmit ={console.log}/>,
    // <App/>,
  document.getElementById('root')
);
