import styled from "styled-components";

export const Shadow = styled.div`
  background: ${props => props.theme.shadow};
  border-radius: ${props => props.theme["border-radius"]};
  opacity: 0.4;
  min-width: ${props => (props.mobile ? "280px" : "400px")};
  height: 87px;
  position: absolute;
  left: -50px;
  top: 50px;
  z-index: -1;
`;

export default styled.form`
  position: relative;
  min-width: 280px;
  display: flex;
  flex-wrap: nowrap;
  height: 87px;
  box-shadow: ${props => props.theme["box-shadow"]};
  border-radius: ${props => props.theme["border-radius"]};
`;
