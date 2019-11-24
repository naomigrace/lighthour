import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  font-family: sans-serif;
  color: ${props => props.theme.color};
  font-weight: bold;
`;

const withLogo = () => <Logo>hour.lighting</Logo>;

export default withLogo;
