import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AppBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 20px;
  font-size: 1.2em;
  color: black;
  -webkit-box-shadow: 0 4px 6px -6px black;
  -moz-box-shadow: 0 4px 6px -6px black;
  box-shadow: 0 4px 6px -6px black;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 0 0 0 20px;
`;

const HeaderLink = styled(StyledLink)`
  flex-grow: 1;
  font-weight: bold;
`;

export default class Header extends React.Component {
  render() {
    return (
      <AppBar>
        <HeaderLink className="link" to="/">
          bethany eastman
        </HeaderLink>
        <StyledLink className="link" to="/projects">
          projects
        </StyledLink>
        <StyledLink className="link" to="/contact">
          contact
        </StyledLink>
      </AppBar>
    );
  }
}
