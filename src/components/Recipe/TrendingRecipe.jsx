import img from "../../assets/cof.jpg";
import "./TrendingRecipe.css";

const TrendingRecipe = () => {
  return (
    <>
       
        <div className="recipe-container">
            <div className="card-container">
                <div className="card">
                    <img src={img} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h3 className="card-title">Recipe Title</h3>
                        <p className="card-text">Description of the recipe goes here.</p>
                        <p className="card-text">Additional details or ingredients</p>
                    </div>
                </div>  
            </div>
            <div className="card-container">
                <div className="card">
                    <img src={img} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h3 className="card-title">Recipe Title</h3>
                        <p className="card-text">Description of the recipe goes here.</p>
                        <p className="card-text">Additional details or ingredients</p>
                    </div>
                </div>  
            </div>
            <div className="card-container">
                <div className="card">
                    <img src={img} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h3 className="card-title">Recipe Title</h3>
                        <p className="card-text">Description of the recipe goes here.</p>
                        <p className="card-text">Additional details or ingredients</p>
                    </div>
                </div>  
            </div><div className="card-container">
                <div className="card">
                    <img src={img} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h3 className="card-title">Recipe Title</h3>
                        <p className="card-text">Description of the recipe goes here.</p>
                        <p className="card-text">Additional details or ingredients</p>
                    </div>
                </div>  
            </div><div className="card-container">
                <div className="card">
                    <img src={img} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h3 className="card-title">Recipe Title</h3>
                        <p className="card-text">Description of the recipe goes here.</p>
                        <p className="card-text">Additional details or ingredients</p>
                    </div>
                </div>  
            </div><div className="card-container">
                <div className="card">
                    <img src={img} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h3 className="card-title">Recipe Title</h3>
                        <p className="card-text">Description of the recipe goes here.</p>
                        <p className="card-text">Additional details or ingredients</p>
                    </div>
                </div>  
            </div>
        </div>
    </>
  )
}

export default TrendingRecipe;
