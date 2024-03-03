

import ShareRecipe from './components/Recipe/ShareRecipe'
import TrendingRecipe from './components/Recipe/TrendingRecipe'
import NavBar from './components/NavBar/NavBar'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipe from './components/Recipe/AddRecipe';
import "./App.css"
// import Footer from './components/Footer/Footer';


function App() {
  return (

    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ShareRecipe/>}/>
        <Route path="/recipes" element={<TrendingRecipe/>}/>
        <Route path="/add-recipe" element={<AddRecipe/>}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
  )
}

export default App
