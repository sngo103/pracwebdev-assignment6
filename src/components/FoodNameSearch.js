import React from "react";
import axios from 'axios';


class FoodNameSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        apiData: [],
        meal: "",
        found: false
    }
}

handleInputChange = (event) => {
  this.setState({meal: event.target.value});
}
handleSearchClick = async () => {
  let mealName = this.state.meal;
  let linkToAPI = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + mealName;

  try {
      let response = await axios.get(linkToAPI);
      console.log(response.data);
      this.setState({apiData: response.data, found: true});
  } catch (error) {
      if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.log(error.response.data); //Not Found
          console.log(error.response.status); //404
          this.setState({found: false});
      }
 
  }
}
    // handleSearchClick = () => {
    //     let mealName = this.state.meal;
    //     let linkToAPI = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+mealName;
    //     fetch(linkToAPI)
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         this.setState({
    //           isLoaded: true,
    //           items: result.items
    //         });
    //       },
    //       // Note: it's important to handle errors here
    //       // instead of a catch() block so that we don't swallow
    //       // exceptions from actual bugs in components.
    //       (error) => {
    //         this.setState({
    //           isLoaded: true,
    //           error
    //         });
    //       }
    //     )
    // }

makeTable = () => {
  let currData = this.state.apiData;
  let foundMatch = this.state.found;
  let table = [];
  //found is false when we get 404 error
  console.log("Hiiii");
  if(!foundMatch){
      table.push(<tr key={-1}><td>No Results</td></tr>);
      return table;
  } else {
      let origin = currData.strArea;
      let recipe = currData.strInstructions;
      table.push(
        <tr key={currData.id}>
          <td>Origin: {origin}</td>
          <td>Recipe: {recipe}</td>
        </tr>
      );
      return table;
  }
}
  render() {
    return (
      <div>
        <div className="p-5 border-2">
          Search for a dish by name:
          <br />
          {/* www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata */}
          <form>
            <input
              className="rounded-md px-2 py-1 my-1 border-black border-2 text-green-900 text-opacity-30"
              type="text"
              value={this.state.meal}
              onChange={(event)=>this.handleInputChange(event)}
              placeholder="Enter Meal"
            />
            <br />
            <button
              className="inline-block my-3 px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              //type="submit"
              onClick={this.handleSearchClick}
            >
              Submit
            </button>
          </form>
        </div>
        <table id="data">
            <tbody>
              {this.makeTable()}
            </tbody>
        </table>
      </div>
    );
  }
}

export default FoodNameSearch;
