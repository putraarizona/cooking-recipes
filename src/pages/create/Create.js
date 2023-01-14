import { useState, useRef } from "react";
import "./Create.css";
import { useFetch } from "../../hooks/useFetch";
import { useHistory } from "react-router-dom";

function NewRecipe() {
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [method, setMethod] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const history = useHistory();

  const { postData, data, error } = useFetch("http://localhost:3000/recipes", "POST");

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ title, ingredients, method, cookingTime: cookingTime + " minutes" });
  };

  data && history.push("/");

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  return (
    <div className="create">
      <h2>Add New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          <span>Recipe Title : </span>
          <input type="text" required placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          <span>Recipe Ingredients : </span>
          <div className="ingredients">
            <input type="text" value={newIngredient} onChange={(e) => setNewIngredient(e.target.value)} ref={ingredientInput} />
            <button className="btn" onClick={handleAdd}>
              Add
            </button>
          </div>
        </label>
        <p>
          Current Ingredients :
          {ingredients.map((ing) => (
            <em key={ing}>{ing}, </em>
          ))}
        </p>

        <label>
          <span>Recipe Method : </span>
          <textarea value={method} onChange={(e) => setMethod(e.target.value)} required />
        </label>
        <label>
          <span>Cooking Time : </span>
          <input type="number" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} required />
        </label>
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default NewRecipe;
