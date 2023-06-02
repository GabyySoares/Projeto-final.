import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GetBadgeById from './Components/GetBadgeById/GetBadgeById';
import CreateBadge from './Components/CreateBadge/CreateBadge';
import UpdateBadgeById from './Components/UpdateBadgeById/UpdateBadgeById';
import DeleteBadge from './Components/DeleteBadge/DeleteBadge';
import Home from './Components/Home/Home';
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
        <Route path="/get-customer" element={<GetBadgeById />} />
        <Route path="/create-customer" element={<CreateBadge />} />
        <Route path="/update-customer" element={<UpdateBadgeById />} />
        <Route path="/delete-customer" element={<DeleteBadge />} />
      </Routes>
        <NavBar />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
