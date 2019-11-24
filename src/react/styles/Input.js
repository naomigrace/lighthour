import styled from "styled-components";

export default styled.input`
<<<<<<< HEAD
    z-index: 1;
    background: white;
    border: 2px solid white;
    padding: 30px;
    color: ${props => props.theme.color};
    border-top-left-radius: ${props => props.theme['border-radius']};
    border-bottom-left-radius: ${props => props.theme['border-radius']};
    font-size: 1.2rem;
    margin-right: none;
    width: 60%;
=======
  z-index: 1;
  background: white;
  border: 2px solid white;
  padding: 30px;
  border-top-left-radius: ${props => props.theme["border-radius"]};
  border-bottom-left-radius: ${props => props.theme["border-radius"]};
  font-size: 1.2rem;
  margin-right: none;
  width: 60%;
  box-shadow: 0 2px 4px 0rgba (0, 0, 0, 0.14);
  color: ${props => props.theme.color};
  font-weight: bold;

  &::placeholder {
    color: ${props => props.theme.color};
>>>>>>> f681038c3be4f370243623b04c52103ef76cbd6e
    font-weight: bold;
  }

  &:active,
  &:focus {
    outline: none !important;
    border: 2px solid #79b0f459;
  }

<<<<<<< HEAD
    &:active,&:focus{
        outline: none !important;
        border: 2px solid ${props => props.theme.color};
    }

    &:active::placeholder,&:focus::placeholder {
        color: white;
    }
`
=======
  &:active::placeholder,
  &:focus::placeholder {
    color: white;
  }
`;
>>>>>>> f681038c3be4f370243623b04c52103ef76cbd6e
