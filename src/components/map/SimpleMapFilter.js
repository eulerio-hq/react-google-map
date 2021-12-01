import React, { Component } from "react";
import {CATEGORY_OPTIONS,NUMBER_OF_STARS} from "../../Constants.js";

class SimpleMapFilter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categoryFilter: "nofilter",
      ratingFilter: "nofilter",
    };
  }

  handleFilterChange = async ev => {
    const target = ev.target;
    const name = target.name;
    const value = target.value;
    if(name === "landmarkCategory"){
      await this.setState({categoryFilter:value})
    }
    else{
      await this.setState({ratingFilter:value})
    }

    this.props.onChange(this.state.categoryFilter,this.state.ratingFilter); // emit the event up to the parent
  };

  render() {
          return (
            <form>
              <div>
              <label>Filter by Category:</label>
              <select id="landmarkCategory"  name="landmarkCategory" onChange={this.handleFilterChange}>
              <option key="none" value="nofilter">No Filter</option>
              {CATEGORY_OPTIONS.map(categoryOption =>
              <option key={categoryOption.value} value={categoryOption.value}>{categoryOption.label}</option>
            )};
              </select>
              <label> Star Rating:</label>
              <select id="starRating"  name="starRating" onChange={this.handleFilterChange}>
              <option key="none" value="nofilter">No Filter</option>
              {[...Array(NUMBER_OF_STARS)].map((elementInArray, index) =>
              <option key={index+1} value={index+1}> {index+1}</option>
            )};
              </select>
            </div>
          </form>
          );
      }
}
export default SimpleMapFilter;
