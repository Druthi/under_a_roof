import React, { Component} from "react";
import axios from 'axios';
import AnimeContainer from "./AnimeContainer.jsx";
import styled from 'styled-components';


let url = 'https://kitsu.io/api/edge/anime';
let fields = ["ageRating", "canonicalTitle", "posterImage" , "synopsis", "id", "slug"]

const Listing = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class Listings extends Component{
  constructor(props) {
    super(props);
    this.state = {
      listings:[]
    };
  }

  componentDidMount() {
    axios({
      method:'get',
      url,
      "params":{
        "filter[genres]":"adventure",
        "fields[anime]":fields.join(','),
        "page[limit]":"20",
        "page[offset]":"0"
      },
      "Accept": "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json"
    })
      .then((response)=> {
        this.setState({
          listings:response.data.data
        })
      });
  }

  render(){
    var { listings } = this.state;
    return(
      <Listing>
        {listings.length > 0?listings.map((anime, i) => {
          return  <AnimeContainer key={i} anime={anime}/>
        }):"LOADER"}
      </Listing>
    );
  }
}

export default Listings;