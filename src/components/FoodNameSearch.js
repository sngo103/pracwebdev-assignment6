import React from "react";
import axios from "axios";

class FoodNameSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      meal: "",
      found: false,
      table: "",
    };
  }

  handleInputChange = (event) => {
    console.log("Changing Input...");
    this.setState({ meal: event.target.value });
  };

  handleSearchClick = async (event) => {
    event.preventDefault();
    console.log("Running handleSearchClick...");
    let mealName = this.state.meal;
    let linkToAPI =
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" + mealName;

    const response = await axios
      .get(linkToAPI)
      .then((res) => {
        console.log("DATA:", res.data);
        console.log("RES:", res);
        this.setState({ apiData: res.data, found: true });
      })
      .catch((error) => {
        console.log("Error:", error);
        this.setState({ found: false });
      });
  };

  makeTable = () => {
    console.log("Running makeTable...");
    let data = this.state.apiData;
    let foundMatch = this.state.found;
    let table = [];
    //found is false when we get 404 error
    if (!foundMatch) {
      return <div>No results.</div>;
    } else {
      table = data.meals.map(function (meal) {
        return (
          <>
            <div className="border-2 border-black grid grid-cols-10 width p-5 gap-2">
              <div className="p-1 border-2 col-span-1 row-span-2">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </div>{" "}
              <div className="font-bold p-1 border-2 col-span-9 justify-center items-center flex">
                {meal.strMeal}
              </div>
              <div className="font-bold p-1 border-2 col-span-1  justify-center items-center flex">
                Cuisine
              </div>{" "}
              <div className="p-1 border-2 col-span-8 justify-center items-center flex">
                {meal.strArea}
              </div>
              <div className="font-bold p-1 border-2 col-span-1 justify-center items-center flex">
                Recipe
              </div>{" "}
              <div className="px-2 py-1 border-2 text-left col-span-9 justify-center items-center flex">
                {meal.strInstructions}
              </div>
              <div className="font-bold p-1 border-2 col-span-1 justify-center items-center flex">
                Recipe Video
              </div>{" "}
              <div className="px-2 py-1 border-2 text-left col-span-9 justify-center items-center flex">
                <div className="hover:text-gray-500"><a href={meal.strYoutube}>{meal.strYoutube}</a></div>
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
      <div>
        <div className="p-5 border-2">
          Search for a dish by name:
          <br />
          {/* www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata */}
          <form onSubmit={this.handleSearchClick}>
            <input
              className="rounded-md px-2 py-1 my-1 border-black border-2 text-green-900"
              type="text"
              value={this.state.meal}
              onChange={this.handleInputChange}
              placeholder="Enter Meal"
            />
            <br />
            <button
              className="inline-block my-3 px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="text-center">{this.makeTable()}</div>
      </div>
    );
  }
}

export default FoodNameSearch;