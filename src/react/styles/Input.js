import styled from "styled-components"

export default styled.input`
    z-index: 1;
    background: white;
    border: 2px solid white;
    padding: 30px;
    border-top-left-radius: ${props => props.theme['border-radius']};
    border-bottom-left-radius: ${props => props.theme['border-radius']};
    font-size: 1.2rem;
    margin-right: none;
    width: 60%;
    box-shadow: 0 2px 4px 0rgba(0,0,0,0.14);
    color: ${props => props.theme.color};
    font-weight: bold;

    &::placeholder {
        color: ${props => props.theme.color};
        font-weight: bold;
    }

    &:active,&:focus{
        outline: none !important;
        border: 2px solid #79B0F459;
    }
    
    &:active::placeholder,&:focus::placeholder {
        color: white;
    }
`