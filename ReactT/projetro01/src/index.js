import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Cadrastar from './pages/cadrasto'
import Consultar from './pages/consultar'
import Home from './pages/home'
import Login from './pages/login'
import Menu from './pages/menu'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
     <Route path='/' element={< App />} />
       <Route path='/cadrasto' element={<Cadrastar />} />
       <Route path='/consultar' element={<Consultar />} />
       <Route path='/home' element={<Home />} />
       <Route path='/login' element={<Login />} />
       <Route path='/menu' element={<Menu/>} />

    
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
