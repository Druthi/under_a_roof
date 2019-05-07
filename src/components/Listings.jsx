import React, { Component} from "react";
import axios from 'axios';
import AnimeContainer from "./AnimeContainer.jsx";
import styled from 'styled-components';
import Search from "./Search.jsx";
import { Router, Link } from "@reach/router";


let url = 'https://kitsu.io/api/edge/anime';
let fields = ["ageRating", "canonicalTitle", "posterImage" , "synopsis", "id", "slug"]

const Listing = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 4% 7%;
  justify-content:space-around;
`;

class Listings extends Component{
  constructor(props) {
    super(props);
    this.state = {
      listings:[],
      filter:"adventure",
      page_limit:20,
      page_offset:0,
      search:""
    };
    this.searchAPI = this.searchAPI.bind(this);
    this.getAPI = this.getAPI.bind(this);
    this.getMore = this.getMore.bind(this);
    this.inputChange = this.inputChange.bind(this);

  }



  getAPI(params) {
    axios({
      method:'get',
      url,
      params,
      "Accept": "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json"
    })
      .then((response)=> {
        this.setState({
          listings:response.data.data
        })
      });
  }


  componentDidMount() {
    var { page_limit, page_offset, filter } = this.state;
    let params = {
      "filter[genres]":filter,
      //"fields[anime]":fields.join(','),
      "page[limit]":page_limit,
      "page[offset]":page_offset
    };
   this.getAPI(params)
  }

  searchAPI() {
    var { page_limit, page_offset, filter, search } = this.state;
    let params = {
      "filter[genres]":filter,
      //"fields[anime]":fields.join(','),
      "page[limit]":20,
      "page[offset]":0,
      "filter[text]":search
    };
    this.getAPI(params);
    this.setState({
      page_offset:0
    });
  }

  getMore() {
    var { page_limit, page_offset, filter, search } = this.state;
    let params = {
      "filter[genres]":filter,
      //"fields[anime]":fields.join(','),
      "page[limit]":20,
      "page[offset]":page_offset+20,
      "filter[text]":search
    };
    this.getAPI(params);
    this.setState({
      page_offset:page_limit+20
    });
  }

  inputChange(e) {
    this.setState({
      search: e.target.value
    });
  }

  render(){
    var { listings, search } = this.state;
    return(
      <div>
        <Link to="/login">Login</Link>
        <Search
          searchAPI={this.searchAPI}
          inputChange={this.inputChange}
          search={search}
        />
        <Listing>
          {listings.length > 0?listings.map((anime, i) => {
            return  <AnimeContainer key={i} anime={anime}/>
          }):"LOADER"}
        </Listing>
        <p onClick={this.getMore}>more...</p>
      </div>
    );
  }
}

export default Listings;