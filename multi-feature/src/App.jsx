import React from 'react'
import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom'
import Home from './Component/Home'
import ChuckNorrisJoke from './Component/Entertainment/ChuckNorrisJoke'
import DadJokes from './Component/Entertainment/DadJokes'
import AboutAnimal from './Component/About/AboutAnimal'
import AboutCelebrity from './Component/About/AboutCelebrity'
import AboutWebsite from './Component/About/AboutWebsite'
import Riddles from './Component/Entertainment/Riddles'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ChuckNorrisJoke" element={<ChuckNorrisJoke />} />
      <Route path="/DadJokes" element={<DadJokes />} />
      <Route path="/AboutAnimal" element={<AboutAnimal />} />
      <Route path="/AboutCelebrity" element={<AboutCelebrity />} />
      <Route path="/AboutWebsite" element={<AboutWebsite />} />
      <Route path="/Riddles" element={<Riddles />} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
