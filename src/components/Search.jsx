import React, { Component} from "react";
import styled from 'styled-components';


class Search extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    var { searchAPI, inputChange, search} = this.props;
    return(
      <div>
        <input
          type="text"
          value={search}
          onChange={(e)=>inputChange(e)}
        >
        </input>
        <button onClick ={searchAPI}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;