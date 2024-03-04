import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./AddRecipe.css";
import { Alert,Typography } from '@mui/material';
import { CSSTransition } from 'react-transition-group';

export default function AddRecipe({ recipe, handleUpdate }) {
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState({
    recipeTitle: recipe ? recipe.recipeTitle : "",
    description: recipe ? recipe.description : "",
    ingredients: recipe ? recipe.ingredients : "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipeData({
      ...recipeData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    setRecipeData({
      ...recipeData,
      recipeImage: event.target.files[0], 
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (recipeData.recipeTitle !== '' && recipeData.description !== '' && recipeData.ingredients !== '' ) {
      try {
        console.log('Form data before submission:', recipeData);
        const formData = new FormData();
        formData.append('recipeTitle', recipeData.recipeTitle);
        formData.append('description', recipeData.description);
        formData.append('ingredients', recipeData.ingredients);
        // formData.append('recipeImage', recipeData.recipeImage, recipeData.recipeImage.name);
  
        if (recipe) {
          console.log("handledata",formData)

          formData.append('id', recipe.id);
          await handleUpdate(formData);
        } else {
          console.log("forrmdata",formData)
          const response = await axios.post('https://perfect-recipe-default-rtdb.firebaseio.com/RecipeData.json', formData,{
            headers: {
              'Content-Type': 'application/json'
            }
            });
          if (response.status === 200) {
            setShowAlert(true);
            setRecipeData({ recipeTitle: '', description: '', ingredients: '', recipeImage: null });
            setTimeout(() => {
              setShowAlert(false);
              navigate("/recipes"); 
            }, 2000);
          } else {
            console.error('Failed to submit form data');
          }
        }
      } catch (error) {
        console.error('Error submitting form data:', error);
      }
    } else {
      alert('Please fill all fields and select an image');
    }
  };
  
  return (
    <Box 
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      className="box-container"
      required
      onSubmit={handleSubmit}
    >
      {/* <Button
        component="label"
        role={undefined}
        variant="outlined"
        tabIndex={-1}
        required
        startIcon={<CloudUploadIcon />}
      >
        Recipe-Image
        <input type="file" style={{ display: "none" }} accept="image/*" onChange={handleImageChange} />
      </Button> */}
      <TextField
        id="recipeTitle"
        name="recipeTitle"
        label="Recipe Title"
        variant="standard"
        value={recipeData.recipeTitle}
        onChange={handleInputChange}
        
      />
      <TextField
        id="description"
        name="description"
        label="Description"
        variant="standard"
        value={recipeData.description}
        onChange={handleInputChange}
      />
      <TextField
        id="ingredients"
        name="ingredients"
        label="Ingredients"
        variant="standard"
        value={recipeData.ingredients}
        onChange={handleInputChange}
      />
    
      <Button className="btn" variant="outlined" type="submit">
        {recipe ? "Update" : "Save"}
      </Button>
      <br></br>
      
      {showAlert && (
        <CSSTransition
        in={showAlert}
        timeout={100}
        classNames="alert"
        unmountOnExit
      >
        <Alert className="alerts" variant="filled" severity="success" color="success">
        <Typography variant="body1">
            Recipe Added!
          </Typography>
        </Alert>
         </CSSTransition>
      )}
    </Box>
  );
}
