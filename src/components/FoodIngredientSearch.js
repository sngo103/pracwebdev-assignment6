import React from "react";

class FoodIngredientSearch extends React.Component {
  render() {
    return (
      <div className="p-5 border-2">
        Search for a dish by ingredient: <br />{" "}
        {/* www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast */}
        <form>
          <input
            className="rounded-md px-2 py-1 my-1 border-black border-2 text-green-900 focus:text-red-600 text-opacity-30"
            type="text"
            value="Ingredient"
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default FoodIngredientSearch;
