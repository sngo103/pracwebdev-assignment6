import React from "react";

class CocktailNameSearch extends React.Component {
  render() {
    return (
      <div className="p-5 border-2">
        Search for a cocktail by name: <br />
        {/* www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita */}
        <form>
          <input
            className="rounded-md px-2 py-1 my-1 border-black border-2 text-green-900 focus:text-red-600 text-opacity-30"
            type="text"
            value="Cocktail"
          />
        </form>
      </div>
    );
  }
}

export default CocktailNameSearch;
