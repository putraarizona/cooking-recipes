import "./RecipeList.css";
import { Link } from "react-router-dom";
// import Home from "../pages/home/Home";

function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <div className="error">Can't find the recipe</div>;
  }
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
}
export default RecipeList;
