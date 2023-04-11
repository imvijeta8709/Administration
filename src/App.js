import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import ShowUser from './components/pages/ShowUser';
import UpdateUser from './components/pages/UpdateUser';
import Auth from './components/pages/Auth';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div style={{ "minHeight": "650px", "width": "100%" }}>

      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" element={<Auth Component={Home}/>} />
        <Route path="/register" element={<Auth Component={Register}/>} />
        <Route path="/showuser" element={<Auth Component={ShowUser} />} />
        <Route path="/updateuser" element={<Auth Component={UpdateUser} />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Toaster/>
    </div>
  );
}