// import { Link } from "react-router-dom";
import "./Recipe.css";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

function Recipe() {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;
  const { data: detail, isPending, error } = useFetch(url);
  return (
    <div className="recipe">
      {isPending && <p className="loading">loading...</p>}
      {error && <p className="error">{error}</p>}
      {detail && (
        <>
          <h2 className="page-title">{detail.title}</h2>
          <p>Takes {detail.cookingTime} to cook.</p>
          <ul>
            {detail.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{detail.method}</p>
        </>
      )}
    </div>
  );
}
export default Recipe;
