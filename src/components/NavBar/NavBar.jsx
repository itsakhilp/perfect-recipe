// import React from 'react'
import { useState } from "react";
import { IoMdRestaurant } from "react-icons/io";
import "./NavBar.css";
import { Link } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => {
    setShowLinks(false); // Hide navigation links when a link is clicked
  };

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <IoMdRestaurant /> Perfect<span id="span">Recipe</span>
          </Link>
        </div>

        <div className={`nav-links ${showLinks ? "show" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={handleClick}>Home</Link>
            </li>
            <li>
              <Link to="/add-recipe" onClick={handleClick}>Add Recipe</Link>
            </li>
            <li>
              <Link to="/recipes" onClick={handleClick}>My Recipes</Link>
            </li>
          </ul>
        </div>

        <div className="login-btns">
          <button>Log In</button>
          <button>Sign Up</button>
        </div>

        <div className="toggle-btn">
          <ToggleButton
            value="right"
            // maxHeight= '10px'
            size="small"
            aria-label="right aligned"
            onClick={() => {
              setShowLinks(!showLinks);
              console.log('showLinks:', showLinks);
              console.log('NavBar rendered');
            }}
          >
            <FormatAlignRightIcon />
          </ToggleButton>
        </div>
      </div>
    </>
  );
};

export default NavBar;
