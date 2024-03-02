

import ShareRecipe from './components/Recipe/ShareRecipe'
import TrendingRecipe from './components/Recipe/TrendingRecipe'
import NavBar from './components/NavBar/NavBar'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipe from './components/Recipe/AddRecipe';
import Home from './components/Home/Home';
// import { Home } from '@mui/icons-material';
import "./App.css"


function App() {
  return (

    <Router>
      <NavBar/>
      <Home/>
      <Routes>
        <Route path="/" element={<ShareRecipe/>}/>
        <Route path="/recipes" element={<TrendingRecipe/>}/>
        <Route path="/add-recipe" element={<AddRecipe/>}/>
      </Routes>
    </Router>
  )
}

export default App
