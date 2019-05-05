import React, { Component} from "react";
import axios from 'axios';
import AnimeContainer from "./AnimeContainer.jsx";
import styled from 'styled-components';


class Search extends Component{
  constructor(props) {
    super(props);
    this.state = {
      search:""
    }
    this.inputChange = this.inputChange.bind(this);
  }


  inputChange(e) {
    this.setState({
      search: e.target.value
    });
  }

  render(){
    var { search } = this.state;
    var { searchAPI} = this.props;
    return(
      <div>
        <input
          type="text"
          value={search}
          onChange={this.inputChange}
        >
        </input>
        <button onClick ={()=>{searchAPI(search)}}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;