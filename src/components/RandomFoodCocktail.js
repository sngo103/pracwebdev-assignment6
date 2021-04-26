import axios from "axios";
import React from "react";

class RandomFoodCocktail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mealData: [],
      cocktailData: [],
      found: false,
      table: "",
    };
  }

  // When user clicks on button
  handleClick = async (event) => {
    event.preventDefault()
    // console.log("Running handleSearchClick...");

    // Generating random meal
    let linkToMealAPI = 
      "https://www.themealdb.com/api/json/v1/1/random.php";
    

    // Generating random cocktail
    let linkToCocktailAPI = 
      "https://www.thecocktaildb.com/api/json/v1/1/random.php";

      const requestCocktail = axios.get(linkToCocktailAPI);
      const requestMeal = axios.get(linkToMealAPI);

      axios.all([requestCocktail, requestMeal])
        .then(axios.spread((...responses) => {
          const responseCocktail = responses[0];
          const responseMeal = responses[1];
          this.setState({cocktailData: responseCocktail, mealData: responseMeal, found: true});
          // use/access the results 
          // console.log("responseCocktail: ", responseCocktail);
          // console.log("responseMeal:", responseMeal);
        })).catch(errors => {
          // react on errors.
            console.log("Error:", errors);
        });
  };


  // Generating table for meal and cocktail
  makeTable = () => {
    // console.log("Running makeTable...");

    let foundMatch = this.state.found;
    let table = [];

    if (!foundMatch) {
      return <div>No results.</div>;
    } else {
      // Creating table
      // console.log("COCKTAIL DATA: ", this.state.cocktailData);
      // console.log("COCKTAIL DATA DRINKS: ", this.state.cocktailData.data.drinks);
      let cocktailDiv = this.state.cocktailData.data.drinks.map(function (cocktail) {
                      return (
                        <div className="border-2 border-black grid grid-cols-10 p-1 gap-2">
                          <div className="p-1 border-2 col-span-1 row-span-1">
                            <img className="transform hover:scale-150" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                          </div>{" "}
                          <div className="font-bold p-1 border-2 row-span-1 col-span-9 justify-center items-center flex">
                            {cocktail.strDrink}
                          </div>
                        </div>
                      )
                    });

      // console.log("MEAL DATA: ", this.state.mealData);
      // console.log("MEAL DATA MEALS: ", this.state.mealData.data.meals);
      
      let mealDiv = this.state.mealData.data.meals.map(function (meal) { 
                      return (
                        <div className="border-2 border-black grid grid-cols-10 p-1 gap-2">
                          <div className="p-1 border-2 col-span-1 row-span-1">
                            <img className="transform hover:scale-150" src={meal.strMealThumb} alt={meal.strMeal} />
                          </div>{" "}
                          <div className="font-bold p-1 border-2 row-span-1 col-span-9 justify-center items-center flex">
                            {meal.strMeal}
                          </div>
                        </div>
                      )
                     });

      table = <div> 
                {cocktailDiv}
                {mealDiv}
              </div>;
    }


    return table;
  };

  render() {
    return (
    <>
      <div>
        <div className="text-center p-5 border-2">
          <form>
            Can't decide, choose for me.
            <br />{" "}
            <button
              className="inline-block my-3 px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              type="submit"
              onClick={this.handleClick}
            >
              {" "}
              Let's go!
            </button>
            {/* www.thecocktaildb.com/api/json/v1/1/random.php */}
            {/* www.themealdb.com/api/json/v1/1/random.php */}
          </form>
        </div>
      </div>
      
      <div className="text-center">{this.makeTable()}</div>
    </>
      
    );
  }

 
}



export default RandomFoodCocktail;
