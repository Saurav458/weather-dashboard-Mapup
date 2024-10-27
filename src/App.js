// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Create this page if needed
import Login from './pages/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;
