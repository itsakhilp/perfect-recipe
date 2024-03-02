// import React from 'react'
import "./Home.css";
import chef from "../../assets/chef.png"

const Home = () => {
  return (
    <>
      <div className="containers">
        <div className="food-data">
            <div className="content">
            <h3>Your daily dish a food journey</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus iure excepturi, assumenda veniam aliquam doloremque?
          </p>
            </div>
        </div>

        <div className="food-img">
          <img src={chef} alt="chef_img" />
        </div>
      </div>
    </>
  );
};

export default Home;
