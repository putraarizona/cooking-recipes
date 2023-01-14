import { useFetch } from "../../hooks/useFetch";
import "./Home.css";

import RecipeList from "../../components/RecipeList";

function Home() {
  const url = "http://localhost:3000/recipes";
  const { data: recipes, isPending, error } = useFetch(url);
  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
export default Home;
