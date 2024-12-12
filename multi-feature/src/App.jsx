import React from 'react'
import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom'
import Home from './Component/Home'
import ChuckNorrisJoke from './Component/Entertainment/ChuckNorrisJoke'
import DadJokes from './Component/Entertainment/DadJokes'
import Riddles from './Component/Entertainment/Riddles'
import AboutAnimal from './Component/About/AboutAnimal'
import AboutCelebrity from './Component/About/AboutCelebrity'
import AboutWebsite from './Component/About/AboutWebsite'
import Cocktail from './Component/Health/Cocktail'
import Exercises from './Component/Health/Exercises'
import Recipe from './Component/Health/Recipe'
// import "./Home.css"
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
      <Route path="/Cocktail" element={<Cocktail />} />
      <Route path="/Exercises" element={<Exercises />} />
      <Route path="/Recipe" element={<Recipe />} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
