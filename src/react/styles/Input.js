import styled from "styled-components"

export default styled.input`
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
    font-weight: bold;

    &::placeholder {
        color: ${props => props.theme.color};
        font-weight: bold;
    }

    &:active,&:focus{
        outline: none !important;
        border: 2px solid ${props => props.theme.color};
    }

    &:active::placeholder,&:focus::placeholder {
        color: white;
    }
`