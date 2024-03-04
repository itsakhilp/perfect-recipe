

import ShareRecipe from './components/Recipe/ShareRecipe'
import NavBar from './components/NavBar/NavBar'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipe from './components/Recipe/AddRecipe';
import "./App.css"
import MyRecipes from './components/Recipe/MyRecipes';


function App() {
  return (

    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ShareRecipe/>}/>
        <Route path="/recipes" element={<MyRecipes/>}/>
        <Route path="/add-recipe" element={<AddRecipe/>}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
  )
}

export default App
