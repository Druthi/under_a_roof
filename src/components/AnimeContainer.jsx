
import React, { Component} from "react";
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip'

const Img = styled.img`
  width: 160px;
  height: 230px;
  padding: 0px 16px;
  border-radius: 18px;
  margin-bottom: 22px;
  :hover{
    opacity: 0.6;
  }
`;
const AnimeContainerDiv = styled.div`
  position:relative;
`;
const Button = styled.button`

  outline: none;
  left: 13%;
  position: absolute;
  top: 72%;
  border-radius: 4px;
  padding: 4% 7%;
  width: 73%;
  background-color: ${props => props.color};
  color: white;
  font-weight: 300;
  font-size: 12px;
  font-family: monospace;
  display:none;
  cursor:pointer;
  ${AnimeContainerDiv}:hover & {
    display:inline;
  }
`;
class AnimeContainer extends Component{
  render(){
    var { anime, user, addToList, loggedIn } = this.props;
    if(loggedIn) {
      var ids = user.anime_ids.split(',');
    }else{
      ids = [];
    }

    return(
      <AnimeContainerDiv>
        <Img data-tip data-for={anime.id} src={anime.attributes.posterImage.small} />
        <ReactTooltip
          id={anime.id}
          place="right"
          effect="solid"
          type="dark"
         >
         <span>{anime.attributes.canonicalTitle}</span>
         <br />
         <span>{anime.attributes.synopsis}</span>
        </ReactTooltip>
        {loggedIn?!ids.includes(anime.id)?<Button color='#1f1021d6' onClick={() => {addToList(anime)} }>
          ADD TO LIST
        </Button>:<Button color='#61c461'>ADDED</Button>:null}
      </AnimeContainerDiv>
    );
  }
}

export default AnimeContainer;