// import img from "../../assets/cof.jpg";
// import "./TrendingRecipe.css";

// const TrendingRecipe = () => {
//   return (
//     <>
       
//         <div className="recipe-container">
//             <div className="card-container">
//                 <div className="card">
//                     <img src={img} alt="" className="card-img-top" />
//                     <div className="card-body">
//                         <h3 className="card-title">Recipe Title</h3>
//                         <p className="card-text">Description of the recipe goes here.</p>
//                         <p className="card-text">Additional details or ingredients</p>
//                     </div>
//                 </div>  
//             </div>
//             <div className="card-container">
//                 <div className="card">
//                     <img src={img} alt="" className="card-img-top" />
//                     <div className="card-body">
//                         <h3 className="card-title">Recipe Title</h3>
//                         <p className="card-text">Description of the recipe goes here.</p>
//                         <p className="card-text">Additional details or ingredients</p>
//                     </div>
//                 </div>  
//             </div>
//             <div className="card-container">
//                 <div className="card">
//                     <img src={img} alt="" className="card-img-top" />
//                     <div className="card-body">
//                         <h3 className="card-title">Recipe Title</h3>
//                         <p className="card-text">Description of the recipe goes here.</p>
//                         <p className="card-text">Additional details or ingredients</p>
//                     </div>
//                 </div>  
//             </div><div className="card-container">
//                 <div className="card">
//                     <img src={img} alt="" className="card-img-top" />
//                     <div className="card-body">
//                         <h3 className="card-title">Recipe Title</h3>
//                         <p className="card-text">Description of the recipe goes here.</p>
//                         <p className="card-text">Additional details or ingredients</p>
//                     </div>
//                 </div>  
//             </div><div className="card-container">
//                 <div className="card">
//                     <img src={img} alt="" className="card-img-top" />
//                     <div className="card-body">
//                         <h3 className="card-title">Recipe Title</h3>
//                         <p className="card-text">Description of the recipe goes here.</p>
//                         <p className="card-text">Additional details or ingredients</p>
//                     </div>
//                 </div>  
//             </div><div className="card-container">
//                 <div className="card">
//                     <img src={img} alt="" className="card-img-top" />
//                     <div className="card-body">
//                         <h3 className="card-title">Recipe Title</h3>
//                         <p className="card-text">Description of the recipe goes here.</p>
//                         <p className="card-text">Additional details or ingredients</p>
//                     </div>
//                 </div>  
//             </div>
//         </div>
//     </>
//   )
// }

// export default TrendingRecipe;


import { useState, useEffect } from "react";
import axios from 'axios';

export default function TrendingRecipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://perfect-recipe-default-rtdb.firebaseio.com/RecipeData.json');

        if (response.status === 200) {
          const data = response.data;
          // Convert object of objects to array of objects
          const recipesArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
          setRecipes(recipesArray);
        } else {
          console.error('Failed to fetch recipes');
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h3>{recipe.recipeTitle}</h3>
            <p>Description: {recipe.description}</p>
            <p>Ingredients: {recipe.ingredients}</p>
            {/* Render image here if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}
