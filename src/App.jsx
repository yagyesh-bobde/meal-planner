

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Planner from './pages/Planner'

function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/meal-planner" element={<Planner />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
