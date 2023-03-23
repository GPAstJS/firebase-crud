import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/home/index'
import SignUp from './pages/signup/index'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' Component={App}/>
    <Route path='/home' Component={Home}/>
    <Route path='/signup' Component={SignUp}/>
  </Routes>
  </BrowserRouter>
);  

reportWebVitals();
