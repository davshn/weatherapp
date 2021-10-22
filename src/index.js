import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import './normalize.css';


ReactDOM.render(              //Realiza el render de la app
  <BrowserRouter>            {/*Invoca el router y la react app*/}
    <App />
  </BrowserRouter>,
  document.getElementById('root')    //Inyecta el codigo html en la etiqueta root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
