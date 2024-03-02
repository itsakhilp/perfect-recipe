// import { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import "./AddRecipe.css";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// export default function AddRecipe() {
//   const navigate = useNavigate();
//   const [recipeData, setRecipeData] = useState({
//     recipeTitle: "",
//     description: "",
//     ingredients: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setRecipeData({
//       ...recipeData,
//       [name]: value,
//     });
//   };

//   const handleAddRecipe = (event) => {
//     // localStorage.setItem("recipeData", JSON.stringify(recipeData));
//     event.preventDefault();
//     navigate("/recipes");
//   };

//   useEffect(() => {
//     const submitData = async () => {
//       try {
//         const response = await axios.post('https://perfect-recipe-default-rtdb.firebaseio.com/RecipeData.json', recipeData);

//         if (response.status === 200) {
//           console.log('Form data submitted successfully!');
//           // Reset form fields
//           setRecipeData({ recipeTitle: '', description: '', ingredients: ''});
//         } else {
//           console.error('Failed to submit form data');
//         }
//       } catch (error) {
//         console.error('Error submitting form data:', error);
//       }
//     };

//     // Submit data when formData changes
//     if (recipeData.recipeTitle !== '' && recipeData.description !== '' && recipeData.ingredients !== '') {
//       submitData();
//     }
//   }, [recipeData]);


//   return (
//     <Box
//       component="form"
//       sx={{
//         "& > :not(style)": { m: 1, width: "25ch" },
//       }}
//       noValidate
//       autoComplete="off"
//       className="box-container"
//       required
//     >
//       <Button
//         component="label"
//         role={undefined}
//         variant="outlined"
//         tabIndex={-1}
//         required
//         startIcon={<CloudUploadIcon />}
//       >
//         Recipe-Image
//         <input type="file" style={{ display: "none" }} accept="image/*" />
//       </Button>
//       <TextField
//         id="recipeTitle"
//         name="recipeTitle"
//         label="Recipe Title"
//         variant="standard"
//         value={recipeData.recipeTitle}
//         onChange={handleInputChange}
//       />
//       <TextField
//         id="description"
//         name="description"
//         label="Description"
//         variant="standard"
//         value={recipeData.description}
//         onChange={handleInputChange}
//       />
//       <TextField
//         id="ingredients"
//         name="ingredients"
//         label="Ingredients"
//         variant="standard"
//         value={recipeData.ingredients}
//         onChange={handleInputChange}
//       />
//       <Button variant="outlined" onClick={handleAddRecipe}>
//         Save
//       </Button>
//     </Box>
//   );
// }


// import { useState } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import axios from 'axios';

// export default function AddRecipe() {
//   const [recipeData, setRecipeData] = useState({
//     recipeTitle: "",
//     description: "",
//     ingredients: "",
//     recipeImage: null,
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setRecipeData({
//       ...recipeData,
//       [name]: value,
//     });
//   };

//   const handleImageChange = (event) => {
//     setRecipeData({
//       ...recipeData,
//       recipeImage: event.target.files[0], // Assuming the input type is file
//     });
//   };

//   const handleAddRecipe = async () => {
//     if (recipeData.recipeTitle !== '' && recipeData.description !== '' && recipeData.ingredients !== '' && recipeData.recipeImage) {
//       try {
//         const formData = new FormData();
//         formData.append('recipeTitle', recipeData.recipeTitle);
//         formData.append('description', recipeData.description);
//         formData.append('ingredients', recipeData.ingredients);
//         formData.append('recipeImage', recipeData.recipeImage, recipeData.recipeImage.name); // Ensure image is properly appended
  
//         const response = await axios.post('https://perfect-recipe-default-rtdb.firebaseio.com/RecipeData.json', formData);
  
//         if (response.status === 200) {
//           alert('Form data submitted successfully!');
//           setRecipeData({ recipeTitle: '', description: '', ingredients: '' });
//         } else {
//           console.error('Failed to submit form data');
//         }
//       } catch (error) {
//         console.error('Error submitting form data:', error);
//       }
//     } else {
//       alert('Please fill all fields and select an image');
//     }
//   };
  
//   return (
//     <Box
//       component="form"
//       sx={{
//         "& > :not(style)": { m: 1, width: "25ch" },
//       }}
//       noValidate
//       autoComplete="off"
//       className="box-container"
//       required
//     >
//       <Button
//         component="label"
//         role={undefined}
//         variant="outlined"
//         tabIndex={-1}
//         required
//         startIcon={<CloudUploadIcon />}
//       >
//         Recipe-Image
//         <input type="file" style={{ display: "none" }} accept="image/*" onChange={handleImageChange} />
//       </Button>
//       <TextField
//         id="recipeTitle"
//         name="recipeTitle"
//         label="Recipe Title"
//         variant="standard"
//         value={recipeData.recipeTitle}
//         onChange={handleInputChange}
//       />
//       <TextField
//         id="description"
//         name="description"
//         label="Description"
//         variant="standard"
//         value={recipeData.description}
//         onChange={handleInputChange}
//       />
//       <TextField
//         id="ingredients"
//         name="ingredients"
//         label="Ingredients"
//         variant="standard"
//         value={recipeData.ingredients}
//         onChange={handleInputChange}
//       />
//       <Button variant="outlined" onClick={handleAddRecipe}>
//         Save
//       </Button>
//     </Box>
//   );
// }


import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function AddRecipe() {
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState({
    recipeTitle: "",
    description: "",
    ingredients: "",
    recipeImage: null,
  });

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
      recipeImage: event.target.files[0], // Assuming the input type is file
    });
  };

  const handleAddRecipe = async (event) => {
    event.preventDefault(); // Prevent default form submission
    if (recipeData.recipeTitle !== '' && recipeData.description !== '' && recipeData.ingredients !== '' && recipeData.recipeImage) {
      try {
        const formData = new FormData();
        formData.append('recipeTitle', recipeData.recipeTitle);
        formData.append('description', recipeData.description);
        formData.append('ingredients', recipeData.ingredients);
        formData.append('recipeImage', recipeData.recipeImage, recipeData.recipeImage.name); // Ensure image is properly appended
  
        const response = await axios.post('https://perfect-recipe-default-rtdb.firebaseio.com/RecipeData.json', recipeData);
  
        if (response.status === 200) {
          alert('Form data submitted successfully!');
          setRecipeData({ recipeTitle: '', description: '', ingredients: '' });
          navigate("/recipes"); // Redirect to "/recipes" after successful submission
        } else {
          console.error('Failed to submit form data');
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
    >
      <Button
        component="label"
        role={undefined}
        variant="outlined"
        tabIndex={-1}
        required
        startIcon={<CloudUploadIcon />}
      >
        Recipe-Image
        <input type="file" style={{ display: "none" }} accept="image/*" onChange={handleImageChange} />
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
      <Button variant="outlined" onClick={handleAddRecipe}>
        Save
      </Button>
    </Box>
  );
}

