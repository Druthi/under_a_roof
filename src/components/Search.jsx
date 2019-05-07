import React, { Component} from "react";
import styled from 'styled-components';

const Input = styled.input`
  width: 26%;
  padding: 9px;
  background-color: #f7f7f7;
  outline: none;
`;

const Button = styled.button`
  outline: none;
  padding: 11px;
  border: black;
  width: 11%;
  background-color: black;
  color: #f7f7f7;
  font-size: 12px;
  font-family: monospace;
  cursor:pointer;
  :hover{
    background-color: #00000057;
  }
`;

const Container = styled.div`
  text-align: center;
  margin-top: 3%;
  padding-top: 4%;
`;


class Search extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    var { searchAPI, inputChange, search} = this.props;
    return(
      <Container>
        <Input
          type="text"
          value={search}
          placeholder="Search.."
          onChange={(e)=>inputChange(e)}
        >
        </Input>
        <Button onClick ={searchAPI}>
        <i class="fa fa-search"></i>
        </Button>
      </Container>
    );
  }
}

export default Search;