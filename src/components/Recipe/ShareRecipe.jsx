// import React from 'react'
import captImg from "../../assets/capt-food.jpg"
import Home from "../Home/Home";
import "../Recipe/ShareRecipe.css"
import { useNavigate } from 'react-router-dom';
import Footer from "../Footer/Footer";
import MyRecipes from "./MyRecipes";


const ShareRecipe = () => {
  const navigate = useNavigate();

  const handleCreateNew=(event)=>{
    event.preventDefault();
    navigate('/add-recipe');
  }
  return (
    <>
    <Home/>
        <div className="container">
            <div className="left-cont">
                <img src={captImg} alt="" />
            </div>
            <div className="right-cont">
                    <h2>Share your <span>recipes</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus labore necessitatibus eius, facilis nam!</p>
                    <button onClick={handleCreateNew}>Create New Recipe</button>
            </div>
        </div>
        
        {/* <h3 id='savedrecipes'>Saved Recipes</h3> */}
        <MyRecipes/>
        <Footer/>
    </>
  )
}

export default ShareRecipe