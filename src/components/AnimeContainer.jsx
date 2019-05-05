
import React, { Component} from "react";
import styled from 'styled-components';

const Img = styled.img`
  width: 160px;
  height: 230px;
  padding: 30px;
`;
class AnimeContainer extends Component{
  render(){
    var { anime } = this.props;
    console.log(anime)
    return(
      <div className="AnimeContainer">
        <Img src={anime.attributes.posterImage.small} />
      </div>
    );
  }
}

export default AnimeContainer;