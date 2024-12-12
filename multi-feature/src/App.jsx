import React from 'react'
import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom'
import Home from './Component/Home'
import './App.css'

function App() {

  return (
    <>
    <p>vjhvkvkv</p>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ChuckNorrisJoke" element={<Home />} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
