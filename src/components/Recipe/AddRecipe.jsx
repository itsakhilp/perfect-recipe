import { useState } from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./AddRecipe.css"
import { useNavigate } from 'react-router-dom';


export default function AddRecipe() {
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState({
    recipeTitle: '',
    description: '',
    ingredients: '',
    standard: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipeData({
      ...recipeData,
      [name]: value
    });
  };

  const handleAddRecipe = (event) => {
    // Save recipeData to localStorage or sessionStorage
    localStorage.setItem('recipeData', JSON.stringify(recipeData));
    // Redirect to recipes page
    // Note: You may need to use react-router-dom for proper routing
    // Here I'm just using window.location.href for demonstration
    event.preventDefault();
   
    navigate('/recipes');

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
    >
      <Button
        component="label"
        role={undefined}
        variant="outlined"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Recipe-Image
        <input
          type="file"
          style={{ display: "none" }}
          accept="image/*"
        />
      </Button>
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
      <TextField
        id="standard"
        name="standard"
        label="Standard"
        variant="standard"
        value={recipeData.standard}
        onChange={handleInputChange}
      />
      <Button variant="outlined" onClick={handleAddRecipe}>Save</Button>
    </Box>
  );
}
