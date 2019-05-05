
import React, { Component} from "react";
import styled from 'styled-components';

const Img = styled.img`
  width: 160px;
  height: 230px;
  padding: 0px 16px;
`;
class AnimeContainer extends Component{
  render(){
    var { anime } = this.props;
    return(
      <div className="AnimeContainer">
        <Img src={anime.attributes.posterImage.small} />
      </div>
    );
  }
}

export default AnimeContainer;