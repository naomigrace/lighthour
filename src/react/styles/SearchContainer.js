import styled from "styled-components";

export const Shadow = styled.div`
  background: ${props => props.theme.color};
  border-radius: ${props => props.theme["border-radius"]};
  opacity: 0.4;
  min-width: 400px;
  height: 6rem;
  position: absolute;
  left: -50px;
  top: 50px;
  z-index: 0;
`;

export default styled.form`
  position: relative;
  margin-top: 20px;
  min-width: 350px;
  display: flex;
  flex-wrap: nowrap;
  box-shadow: ${props => props.theme["box-shadow"]};
  border-radius: ${props => props.theme["border-radius"]};
`;
