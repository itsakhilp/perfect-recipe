

import ShareRecipe from './components/Recipe/ShareRecipe'
import TrendingRecipe from './components/Recipe/TrendingRecipe'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipe from './components/Recipe/AddRecipe';

function App() {
  return (

    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ShareRecipe/>}/>
        <Route path="/recipes" element={<TrendingRecipe/>}/>
        <Route path="/add-recipe" element={<AddRecipe/>}/>
      </Routes>
    </Router>
  )
}

export default App
