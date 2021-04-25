import React from "react";
import axios from "axios";

class CocktailNameSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      cocktail: "",
      found: false,
      table: "",
    };
  }

  handleInputChange = (event) => {
    console.log("Changing Input...");
    this.setState({ cocktail: event.target.value });
  };

  handleSearchClick = async (event) => {
    event.preventDefault();
    console.log("Running handleSearchClick...");
    let cocktailName = this.state.cocktail;
    let linkToAPI =
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName;

    await axios
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
    if (!foundMatch || !data.drinks) {
      return <div>No results.</div>;
    } else {
      table = data.drinks.map(function (cocktail) {
        
        return (
          <>
            <div className="border-2 border-black grid grid-cols-10 width p-5 gap-2">
              <div className="p-1 border-2 col-span-2 row-span-4 justify-center items-center flex">
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              </div>{" "}
              <div className="font-bold p-1 border-2 row-span-4 col-span-4 justify-center items-center flex">
                {cocktail.strDrink}
              </div>
              
              <div className="font-bold p-1 border-2 col-span-4 row-span-4 justify-center items-center flex">
                Category: {cocktail.strCategory}
              </div>{" "}
              <div className="px-2 py-1 border-2 text-left col-span-10 justify-center items-center flex">
                Recipe: {cocktail.strInstructions}
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
          Search for a cocktail by name:
          <br />
          {/* www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata */}
          <form onSubmit={this.handleSearchClick}>
            <input
              className="rounded-md px-2 py-1 my-1 border-black border-2 text-green-900"
              type="text"
              value={this.state.cocktail}
              onChange={this.handleInputChange}
              placeholder="Enter dish..."
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

export default CocktailNameSearch;
