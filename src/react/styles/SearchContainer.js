import styled from "styled-components";

<<<<<<< HEAD
export const Shadow = styled.div`
    background: ${props => props.theme.color};
    border-radius: ${props => props.theme['border-radius']};
    opacity: 0.4;
    min-width: 400px;
    height: 6rem;
    position: absolute;
    left: -50px;
    top: 50px;
    z-index: 0;
`

export default styled.form`
    position: relative;
    margin-top: 20px;
    min-width: 350px;
    display: flex;
    flex-wrap: nowrap;
    box-shadow: ${props => props.theme['box-shadow']};
    border-radius: ${props => props.theme['border-radius']};
`
=======
export const shadow = styled.div`
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
`;
>>>>>>> f681038c3be4f370243623b04c52103ef76cbd6e
