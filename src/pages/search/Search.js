import "./Search.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";

function Search() {
  const queryString = useLocation().search; //like this ?q=pizza
  const queryParams = new URLSearchParams(queryString); //pass  , it's allow us to use get method so we can use the query params
  const query = queryParams.get("q"); // pizza

  const { error, isPending, data } = useFetch(`http://localhost:3000/recipes?q=${query}`);
  return (
    <div>
      <h2 className="page-title">Recipe Including "{query}"</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
export default Search;
