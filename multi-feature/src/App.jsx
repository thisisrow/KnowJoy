import React from 'react'
import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom'
import Home from './Component/Home'
import ChuckNorrisJoke from './Component/ChuckNorrisJoke'
import DadJokes from './Component/DadJokes'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ChuckNorrisJoke" element={<ChuckNorrisJoke />} />
      <Route path="/DadJokes" element={<DadJokes />} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
