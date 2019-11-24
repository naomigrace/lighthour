import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    html, body {
        height: 100%;
    }

    body {
        background-image: ${props => props.theme['background-image']};
        background-color: ${props => props.theme['background-color']};
        background-repeat: no-repeat;
    }
`