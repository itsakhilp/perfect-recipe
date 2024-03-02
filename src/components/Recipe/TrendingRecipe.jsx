import { useState, useEffect } from "react";
import axios from 'axios';
import "./TrendingRecipe.css"
import foodimg from "../../assets/no-image.jpg" 

export default function TrendingRecipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://perfect-recipe-default-rtdb.firebaseio.com/RecipeData.json');

        if (response.status === 200) {
          const data = response.data;
          // Convert object of objects to array of objects
          console.log(data)
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
      <div className="recipe-container">
        {recipes.map(recipe => (
          <div className="card-container" key={recipe.id}>
            <div className="card">
              <img src={foodimg} alt={recipe.recipeTitle} className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">{recipe.recipeTitle}</h3>
                <p className="card-text"><span id="boldtitle">Description:</span> {recipe.description}</p>
                <p className="card-text"><span id="boldtitle">Ingredients:</span> {recipe.ingredients}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
