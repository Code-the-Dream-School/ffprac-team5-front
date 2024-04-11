import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./Components/Nav"
import Home from './Components/Home';
import SignupForm from './Components/SignupForm';
import LoginForm from './Components/LoginForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignupForm" element={<SignupForm />} />
        <Route path="/LoginForm" element={<LoginForm /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App
