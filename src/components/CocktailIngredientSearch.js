import React from "react";

class CocktailIngredientSearch extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="p-5 border-2">
            Search for a cocktail by ingredient: <br />
            {/* www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin */}
            <form>
              <input
                className="rounded-md px-2 py-1 my-1 border-black border-2 text-green-900 focus:text-red-600 text-opacity-30"
                type="text"
                value="Ingredient"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CocktailIngredientSearch;
