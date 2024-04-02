import React, { useState, useEffect } from 'react';
import { getAllData } from './util/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Navbar from './components/Navbar.jsx';
import MyRecipesPage from './pages/MyRecipesPage.jsx';
import SubmitRecipePage from './pages/SubmitRecipePage.jsx';


const URL = 'http://localhost:8000/api/v1/';

function App() {
  
  const [message, setMessage] = useState(''); 

  useEffect(() => {

    (async () => {
      const myData = await getAllData(URL)
      setMessage(myData.data);
    })();
      
    return () => {
      console.log('unmounting');
    }

  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/my-recipes" element={<MyRecipesPage />} />
          <Route path="/submit-recipe" element={<SubmitRecipePage />} />
        </Routes>
      </div>
    </Router>
  )
};

export default App
