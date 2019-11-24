import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const logoHeight = 40;

const Logo = styled.div`
  font-family: sans-serif;
  color: ${props => props.theme.color};
  font-weight: bold;
  height: ${logoHeight}px;
  display: flex;
  align-items: center;
`;

const withLogo = () => (
  <Link to="/">
    <Logo>hour.lighting</Logo>
  </Link>
);

export default withLogo;
