import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GetAllCustomers from './Components/GetAllCustomers/GetAllCustomers';
import GetCustomer from './Components/GetCustomer/GetCustomer';
import CreateCustomer from './Components/CreateCustomer/CreateCustomer';
import UpdateCustomer from './Components/UpdateCustomer/UpdateCustomer';
import DeleteCustomer from './Components/DeleteCustomer/DeleteCustomer';
import Home from './Components/Home/Home';
import { Link, NavLink, Router } from 'react-router-dom';
import NavBar from './NavBar';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        {/* Defina suas rotas aqui */}
        <Route path="/" element={<Home />} />
        <Route path="/get-all-customers" element={<GetAllCustomers />} />
        <Route path="/get-customer" element={<GetCustomer />} />
        <Route path="/create-customer" element={<CreateCustomer />} />
        <Route path="/update-customer" element={<UpdateCustomer />} />
        <Route path="/delete-customer" element={<DeleteCustomer />} />
      </Routes>
        <NavBar />
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
