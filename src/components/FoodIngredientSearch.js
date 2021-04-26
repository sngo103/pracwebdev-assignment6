import React from "react";
import axios from "axios";

class FoodIngredientSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      ingredient: "",
      found: false,
      table: "",
    };
  }

  handleInputChange = (event) => {
    // console.log("Changing Input...");
    this.setState({ ingredient: event.target.value });
  };

  handleClick = async (event) => {
    event.preventDefault()
    // console.log("Running handleSearchClick...");
    let ingredient = this.state.ingredient;
    let linkToAPI =
      "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient;

    const response = await axios
      .get(linkToAPI)
      .then((res) => {
        // console.log("DATA:", res.data);
        // console.log("RES:", res);
        this.setState({ apiData: res.data, found: true });
      })
      .catch((error) => {
        console.log("Error:", error);
        this.setState({ found: false });
      });
  };

  makeTable = () => {
    // console.log("Running makeTable...");
    let data = this.state.apiData;
    let foundMatch = this.state.found;
    let table = [];
    if (!foundMatch || !data.meals) {
      return <div>No results.</div>;
    } else {
      table = data.meals.map(function (meal) {
        // console.log("MEAL:", meal)
        return (
          <>
            <div className="border-2 border-black grid grid-cols-10 p-1 gap-2">
              <div className="p-1 border-2 col-span-1 row-span-1">
                <img className="transform hover:scale-150" src={meal.strMealThumb} alt={meal.strMeal} />
              </div>{" "}
              <div className="font-bold p-1 border-2 row-span-1 col-span-9 justify-center items-center flex">
                {meal.strMeal}
              </div>
            </div>
            <br />
          </>
        );
      });
    }
    return table;
  };

  render() {
    return (
      <>
        <div className="p-5 border-2">
          Search for a dish by ingredient: <br />{" "}
          {/* www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast */}
          <form>
            <input
              className="rounded-md px-2 py-1 my-1 border-black border-2 text-green-900"
              type="text"
              placeholder="Enter ingredient..."
              value={this.state.ingredient}
              onChange={this.handleInputChange}
            />
            <br />
            <input
              type="submit"
              className="inline-block my-3 px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              onClick={this.handleClick}
            />
          </form>
        </div>
        <div className="text-center">{this.makeTable()}</div>
      </>
    );
  }
}

export default FoodIngredientSearch;
