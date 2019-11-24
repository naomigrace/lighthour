import styled from "styled-components";

export default styled.button`
  background-color: ${props => props.theme.color};
  border: 2px solid ${props => props.theme.color};
  color: #fff;
  padding: 30px;
  margin-left: -4px;
  min-width: 150px;
  font-size: 1.2rem;
  border-radius: 0 ${props => props.theme["border-radius"]}
    ${props => props.theme["border-radius"]} 0;
  font-weight: bold;

  &:hover {
    background-color: darken(#79b0f4, 0.5);
  }

  &:active,
  &:focus {
    outline: none !important;
    border: 2px solid #0000001f;
  }
`;
