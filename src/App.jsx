import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Login from './assets/LoginPage'
import Signup from './assets/Signup'

import Home from './assets/Home'
function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
   
  )
}

export default App
