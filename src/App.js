import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';


import Login from './components/Login';
import Signup from './components/Signup';



function App() {
 
 

  return (
    <>
    <Router>
      <Navbar/>
      
      <div className="container">
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={ <Login />}></Route>
          <Route exact path="/Signup" element={ <Signup />}></Route>
      </Routes>
      </div>
    </Router>
    
    </>
  );
}

export default App;
  