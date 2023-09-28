

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Planner from './pages/Planner'
import Tracker from './pages/Tracker'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Header from './components/Header/Header'

function App() {
  
  return (
    <BrowserRouter>
        <div className="px-10">
          <Header />
        </div>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/meal-planner" element={<Planner />} />
        <Route path="/meal-tracker" element={<Tracker />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
