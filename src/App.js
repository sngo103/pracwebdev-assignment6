import "./App.css";
import FoodNameSearch from "./components/FoodNameSearch";
import FoodIngredientSearch from "./components/FoodIngredientSearch";
import CocktailNameSearch from "./components/CocktailNameSearch";
import CocktailIngredientSearch from "./components/CocktailIngredientSearch";
import RandomFoodCocktail from "./components/RandomFoodCocktail";

function App() {
  return (
    <div className="App">
      <header>
        <div className="p-5 text-yellow-500">
          <h1 className="text-5xl">The Meal Deal</h1>
          <h3 className="text-l">
            Brought to you by The Meal DB
            <br /> and the Foodies <br />
            Samantha Ngo, Gabby Gonzalez, Kristy Lau, & Nirmala Kuhl
          </h3>
          <h3 className="font-semibold text-l">
            *Note: If nothing changes after hitting submit, then there are no
            results for that query.
          </h3>
        </div>
      </header>
      <body>
        <FoodNameSearch />
        <FoodIngredientSearch />
        <CocktailNameSearch />
        <CocktailIngredientSearch />
        <RandomFoodCocktail />
      </body>
      <hr />
      <br />
      ❤️ Brought to you by Team Food: Samantha Ngo, Gabby Gonzalez, Nirmala
      Kuhl, Kristy Lau ❤️ <br />
      April 2021
      <br /><br />
    </div>
  );
}

export default App;
