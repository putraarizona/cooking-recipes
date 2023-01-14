import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

// page components
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";

// Navbar Component
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
