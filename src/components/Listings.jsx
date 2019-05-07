import React, { Component} from "react";
import axios from 'axios';
import AnimeContainer from "./AnimeContainer.jsx";
import styled from 'styled-components';
import Search from "./Search.jsx";
import { Router, Link } from "@reach/router";


let url = 'https://kitsu.io/api/edge/anime';
let fields = ["ageRating", "canonicalTitle", "posterImage" , "synopsis", "id", "slug"]

const More = styled.p`
  color:white;
`;

const Listing = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 4% 7%;
  justify-content:space-around;
  width: 68%;
  background-color: #f7f7f7;
  padding: 2% 1%;
  margin-left: 15%;
  height:100%;
`;

const Loader = styled.div`
  border: 6px solid #f7f7f7;
  border-top: 6px solid #575e63;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
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
    var { page_limit, page_offset, filter, listings } = this.state;
    let params = {
      "filter[genres]":filter,
      "page[limit]":page_limit,
      "page[offset]":page_offset
    };
    if(listings.length === 0) {
      this.getAPI(params)
    }
  }

  searchAPI() {
    var { page_limit, page_offset, filter, search } = this.state;
    let params = {
      "filter[genres]":filter,
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
        <Search
          searchAPI={this.searchAPI}
          inputChange={this.inputChange}
          search={search}
        />
        <Listing>
          {listings.length > 0?listings.map((anime, i) => {
            return  <AnimeContainer user={this.props.user} loggedIn={this.props.loggedIn} key={i} anime={anime} addToList={this.props.addToList} />
          }):<Loader></Loader>}
        </Listing>
        <More onClick={this.getMore}>more...</More>
      </div>
    );
  }
}

export default Listings;