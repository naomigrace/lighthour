import styled from "styled-components";

// this loader is by Benedikte Vanderween
// todo: add to credits
// https://codepen.io/Benedikte/pen/bIuGr

export const SunLabel = styled.p`
    color: white;
    font-weight: bold;
    position: relative;
    text-align: center;
    margin-bottom: -205px;
    z-index: 2;
    font-family: sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 20px;
    font-style: italic;
`

export const Sun = styled.circle`
stroke-width:18;
stroke-dasharray:2;
stroke-dashoffset:2;
}
/* animation for the sun glowing effect */
@-webkit-keyframes sun-glow { 
  0% { fill: #f1c40f; stroke:#f1c40f;}
  50% { fill: #e67e22; stroke:#e67e22;}
  100% { fill: #f1c40f; stroke:#f1c40f;}
}
@-moz-keyframes sun-glow { 
  0% { fill: #f1c40f; stroke:#f1c40f;}
  50% { fill: #e67e22; stroke:#e67e22;}
  100% { fill: #f1c40f; stroke:#f1c40f;}
}
@-o-keyframes sun-glow { 
  0% { fill: #f1c40f; stroke:#f1c40f;}
  50% { fill: #e67e22; stroke:#e67e22;}
  100% { fill: #f1c40f; stroke:#f1c40f;}
}
@-ms-keyframes sun-glow { 
  0% { fill: #f1c40f; stroke:#f1c40f;}
  50% { fill: #e67e22; stroke:#e67e22;}
  100% { fill: #f1c40f; stroke:#f1c40f;}
}
@keyframes sun-glow { 
  0% { fill: #f1c40f; stroke:#f1c40f;}
  50% { fill: #e67e22; stroke:#e67e22;}
  100% { fill: #f1c40f; stroke:#f1c40f;}
}

/* start spin animation */
@-webkit-keyframes spin{
  100% {
      -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes spin{
  100% {
      -moz-transform: rotate(360deg);
  }
}
@-o-keyframes spin{
  100% {
      -o-transform: rotate(360deg);
  }
}
@-ms-keyframes spin{
  100% {
      -ms-transform: rotate(360deg);
  }
}
@keyframes spin{
  100% {
      transform: rotate(360deg);
  }
}
`

export default styled.svg`
  width: 300px;
  height: 300px;

  -webkit-transform-origin: center center;
  -moz-transform-origin: 50% 50%;
  -o-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: 50% 50%;

  -webkit-animation: spin 25s linear infinite, sun-glow 3s 0s linear infinite;
  -moz-animation: spin 25s linear infinite, sun-glow 3s 0s linear infinite;
  -o-animation: spin 25s linear infinite, sun-glow 3s 0s linear infinite;
  -ms-animation: spin 25s linear infinite, sun-glow 3s 0s ease-in-out infinite;
  animation: spin 25s linear infinite, sun-glow 3s 0s linear infinite;
`;
