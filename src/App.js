import "./App.css";
import FoodNameSearch from './components/FoodNameSearch';
import FoodIngredientSearch from './components/FoodIngredientSearch';
import CocktailNameSearch from './components/CocktailNameSearch';
import CocktailIngredientSearch from './components/CocktailIngredientSearch';
import RandomFoodCocktail from './components/RandomFoodCocktail';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container p-5 text-yellow-500">
          <h1 className="text-5xl">The Meal Deal</h1>
          <h3 className="text-l">
            Brought to you by The Meal DB
            <br /> and the Foodies <br />
            Samantha Ngo, Gabby Gonzalez, Kristy Lau, & Nirmala Kuhl
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
    </div>
  );
}

export default App;
