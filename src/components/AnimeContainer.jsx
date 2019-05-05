
import React, { Component} from "react";
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip'

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
        <Img data-tip data-for={anime.id} src={anime.attributes.posterImage.small} />
        <ReactTooltip
          id={anime.id}
          multiline={true}
          data-multiline={true}
          html={true}
          place="right"
         >
         {`${anime.attributes.canonicalTitle}
         <br />
         ${anime.attributes.synopsis}`}
        </ReactTooltip>
      </div>
    );
  }
}

export default AnimeContainer;