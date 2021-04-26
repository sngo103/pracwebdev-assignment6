import React from "react";
import axios from "axios";

class CocktailIngredientSearch extends React.Component {
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
    this.setState({ ingredient: event.target.value });
  };

  handleClick = async (event) => {
    event.preventDefault();
    let ingredient = this.state.ingredient;
    let linkToAPI =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;

    const response = await axios
      .get(linkToAPI)
      .then((res) => {
        this.setState({ apiData: res.data, found: true });
      })
      .catch((error) => {
        console.log("Error:", error);
        this.setState({ found: false });
      });
  };

  makeTable = () => {
    let data = this.state.apiData;
    let foundMatch = this.state.found;
    let table = [];
    if (!foundMatch || !data.drinks) {
      return <div>No results.</div>;
    } else {
      table = data.drinks.map(function (cocktail) {
        return (
          <>
            <div className="border-2 border-black grid grid-cols-10 p-1 gap-2">
              <div className="p-1 border-2 col-span-1 row-span-1">
                <img className="transform hover:scale-150" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              </div>{" "}
              <div className="font-bold p-1 border-2 row-span-1 col-span-9 justify-center items-center flex">
                {cocktail.strDrink}
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
          Search for a cocktail by ingredient: <br />{" "}
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
export default CocktailIngredientSearch;
