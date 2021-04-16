import React from "react";

class RandomFoodCocktail extends React.Component {
  render() {
    return (
      <div>
        <div className="text-center p-5 border-2">
          <form>
            Can't decide, choose for me.
            <br />{" "}
            <button
              className="inline-block my-3 px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              type="submit"
            >
              {" "}
              Let's go!
            </button>
            {/* www.thecocktaildb.com/api/json/v1/1/random.php */}
            {/* www.themealdb.com/api/json/v1/1/random.php */}
          </form>
        </div>
      </div>
    );
  }
}

export default RandomFoodCocktail;
