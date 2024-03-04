import { useState, useEffect } from "react";
import axios from 'axios';
import "./MyRecipes.css"
import foodimg from "../../assets/pizz.jpg" 
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Alert,Typography } from '@mui/material';
import { CSSTransition } from 'react-transition-group';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AddRecipe from './AddRecipe'; // Import AddRecipe component

export default function MyRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [editRecipe, setEditRecipe] = useState(null);

  const [forceRerender, setForceRerender] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://perfect-recipe-default-rtdb.firebaseio.com/RecipeData.json');

        if (response.status === 200) {
          const data = response.data;
          const recipesArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
          const sortedRecipes = recipesArray.sort((a, b) => b.id.localeCompare(a.id));
          setRecipes(sortedRecipes);
        } else {
          console.error('Failed to fetch recipes');
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchData();
  }, [forceRerender]); // Added forceRerender as a dependency

  const handleDelete = async (recipeId) => {
    try {
      await axios.delete(`https://perfect-recipe-default-rtdb.firebaseio.com/RecipeData/${recipeId}.json`)
      setRecipes(recipes.filter(recipe => recipe.id !== recipeId))
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
    } catch (error) {
      console.error('Error in Deleting:', error);
    }
  }

  const handleEdit = (recipe) => {
    setEditRecipe(recipe);
  };

  const handleUpdate = async (updatedRecipe) => {
    try {
      console.log("Updated Recipe:", updatedRecipe);

      // Extract id and other recipe data
      const { id, ...recipes } = updatedRecipe;
      await axios.put(`https://perfect-recipe-default-rtdb.firebaseio.com/RecipeData/${updatedRecipe.id}.json`, recipes);
      setRecipes(prevRecipes => prevRecipes.map(recipe => (recipe.id === id ? { ...recipe, ...recipes } : recipe)));
      setEditRecipe(null);
      setForceRerender(prev => !prev);
      console.log("Recipe updated successfully");
    } catch (error) {
      console.error("Error updating recipe:", error);
    }
  };

  return (
    <div>
      <p style={{'marginLeft':'2  0px'}}>>>>Your Saved Recipes!</p>
      <div className="recipe-container">
        {recipes.map(recipe => (
          <div className="card-container" key={recipe.id}>
            <div className="card">
              <img src={foodimg} alt={recipe.recipeTitle} className="card-img-top" />
              <div className="card-body">
                <div className="rcp-data">
                <h3 className="card-title">{recipe.recipeTitle}</h3>
                <p className="card-text"><span id="boldtitle">Description:<br></br> </span> {recipe.description}</p>
                <p className="card-text"><span id="boldtitle">Ingredients:<br></br></span> {recipe.ingredients}</p>
                
                </div>
                <div className="mod-btns">
                  {/* <button onClick={() => handleEdit(recipe)} id="upd-elm"><EditIcon/></button> */}
                  <button onClick={() => handleDelete(recipe.id)} id="dlt-elm"><DeleteOutlineIcon/></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showAlert && (
        <CSSTransition
        in={showAlert}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <Alert className="alert" variant="filled" severity="success">
          <Typography variant="body1">
            Recipe Deleted!
          </Typography>
        </Alert>
         </CSSTransition>
      )}
      {editRecipe && (
        <AddRecipe
          recipe={editRecipe}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
}
